import React from "react";
import { UserFormData } from "../types";

interface ReviewFormProps {
  formData: UserFormData;
  onSubmit: (e: React.FormEvent) => void;
  onPrev: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({
  formData,
  onSubmit,
  onPrev,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="space-y-6 animate-fadeIn break-normal">
      <h2 className="text-2xl font-mono font-bold tracking-tight mb-6">
        MISSÃO CONCLUIDA!
      </h2>

      <div className="space-y-6 bg-gray-100 p-6">
        <div>
          <h3 className="text-sm font-mono uppercase tracking-wider mb-2">
            INFORMAÇÕES PESSOAIS
          </h3>
          <p className="font-mono">
            <span className="font-bold">Nome:</span> {formData.name}
          </p>
          <p className="font-mono">
            <span className="font-bold">Email:</span> {formData.email}
          </p>
          <p className="font-mono">
            <span className="font-bold">Senha:</span> {formData.senha}
          </p>
          <p className="font-mono">
            <span className="font-bold">CPF:</span> {formData.cpf}
          </p>
          <p className="font-mono">
            <span className="font-bold">Endereço:</span> {formData.address}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-mono uppercase tracking-wider mb-2">
            Perfil Gamer
          </h3>
          <p className="font-mono">
            <span className="font-bold">Jogos:</span> {formData.gamesPlayed}
          </p>
          <p className="font-mono">
            <span className="font-bold">Jogador Favorito:</span>{" "}
            {formData.favoritePlayer}
          </p>
          <p className="font-mono">
            <span className="font-bold">Participou de eventos:</span>{" "}
            {formData.attendedEvents ? "Sim" : "Não"}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-mono uppercase tracking-wider mb-2">
            Documento
          </h3>
          <p className="font-mono">
            <span className="font-bold">Documento ID:</span>{" "}
            {formData.idDocument ? (formData.idDocument as File).name : "None"}
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={onPrev}
          className="w-1/2 py-3 px-6 bg-white border-2 border-black text-black font-mono uppercase tracking-wider hover:bg-gray-100 transition-all duration-300"
        >
          Voltar
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-1/2 py-3 px-6 bg-black text-white font-mono uppercase tracking-wider hover:bg-gray-900 transition-all duration-300 transform"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
