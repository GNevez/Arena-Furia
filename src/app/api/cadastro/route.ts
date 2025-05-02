import { NextRequest, NextResponse } from "next/server";
import { UserFormData } from "../../../types";
import vision from "@google-cloud/vision";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const keyFilename = path.join(__dirname, "credentials.json");

const client = new vision.ImageAnnotatorClient({ keyFilename });

async function detectarTextoNaImagem(file: File, cpfUsuario: string) {
  try {
    console.log("Iniciando processamento do arquivo");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    console.log("Buffer criado com sucesso");

    console.log("Iniciando detecção de texto com Google Cloud Vision");
    const [result] = await client.textDetection({ image: { content: buffer } });
    console.log("Detecção concluída");

    const detections = result.textAnnotations;

    if (!detections || detections.length === 0) {
      console.log("Nenhum texto detectado na imagem");
      return false;
    }

    // Formata o CPF do usuário para remover caracteres não numéricos
    const cpfFormatado = cpfUsuario.replace(/\D/g, "");
    console.log("CPF do usuário formatado:", cpfFormatado);

    // Procura por números no texto detectado
    const numerosEncontrados = new Set<string>();
    detections.forEach((text) => {
      // Encontra todos os números no texto
      const numeros = text.description?.match(/\d+/g) || [];
      numeros.forEach((numero) => numerosEncontrados.add(numero));
    });

    console.log(
      "Números encontrados no documento:",
      Array.from(numerosEncontrados)
    );

    // Verifica se o CPF está presente nos números encontrados
    const cpfEncontrado = Array.from(numerosEncontrados).some((numero) =>
      numero.includes(cpfFormatado)
    );

    if (cpfEncontrado) {
      console.log("✅ CPF encontrado no documento!");
      return true;
    } else {
      console.log("❌ CPF não encontrado no documento");
      return false;
    }
  } catch (error) {
    console.error("Erro na detecção de texto:", error);
    throw error;
  }
}

function isFormData(formData: globalThis.FormData): formData is FormData {
  const requiredFields = [
    "name",
    "email",
    "senha",
    "address",
    "cpf",
    "gamesPlayed",
    "favoritePlayer",
    "attendedEvents",
  ];

  // Log para debug
  console.log("Dados recebidos:", Object.fromEntries(formData.entries()));

  for (const field of requiredFields) {
    if (!formData.has(field)) {
      console.log(`Campo ${field} não encontrado`);
      return false;
    }
  }

  const idDocument = formData.get("idDocument");
  if (!idDocument) {
    console.log("Documento de identificação não encontrado");
    return false;
  }

  return true;
}

export async function POST(req: NextRequest) {
  try {
    console.log("Iniciando processamento do POST");
    const formData = await req.formData();

    if (!isFormData(formData)) {
      console.log("FormData inválido");
      return NextResponse.json(
        { erro: "Campos obrigatórios faltando ou inválidos." },
        { status: 400 }
      );
    }

    const dados = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      senha: formData.get("senha") as string,
      address: formData.get("address") as string,
      cpf: formData.get("cpf") as string,
      gamesPlayed: formData.get("gamesPlayed") as string,
      favoritePlayer: formData.get("favoritePlayer") as string,
      attendedEvents: formData.get("attendedEvents") === "true",
    };

    console.log("Dados processados:", dados);

    const idDocument = formData.get("idDocument");
    if (!(idDocument instanceof File)) {
      console.log("Documento inválido");
      return NextResponse.json(
        { erro: "Documento de identificação inválido." },
        { status: 400 }
      );
    }

    try {
      console.log("Iniciando validação do documento");
      const cpfValido = await detectarTextoNaImagem(idDocument, dados.cpf);

      if (!cpfValido) {
        return NextResponse.json(
          { erro: "CPF não encontrado no documento enviado." },
          { status: 400 }
        );
      }


      
      console.log("Validação do documento concluída com sucesso");
    } catch (error) {
      console.error("Erro na validação do documento:", error);
      return NextResponse.json(
        { erro: "Erro ao processar o documento." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { msg: "Usuário criado com sucesso!", dados },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro geral no processamento:", error);
    return NextResponse.json(
      {
        erro: "Erro ao processar o POST.",
        detalhes: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
