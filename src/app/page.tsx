import React from "react";
import Image from "next/image";
import { Box, Users, Trophy, Gamepad2, ArrowRight, LogIn } from "lucide-react";
import Button from "../UI/button";
import furia from "../assets/logo-furia.svg";
import logo from "../assets/Furia_Esports_logo.png";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://img-cdn.hltv.org/gallerypicture/MxHkMlj7n5aZCct0KUPdCy.jpg?ixlib=java-2.1.0&m=%2Fm.png&mw=160&mx=30&my=710&w=1200&s=7f299571019d4e09868f145add96c25e")',
            filter: "brightness(0.4)",
            backgroundPositionY: "-15rem",
          }}
        />

        <div className="relative z-20">
          <nav className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={logo} alt="Logo" className="w-8 h-8 mr-2" />
                <Image src={furia} alt="Furia" />
              </div>
              <div className="flex">
                <Link href={"/Entrar"}>
                  <Button variant="primary" size="md" className="font-medium">
                    Entrar
                    <LogIn className="ml-2" />
                  </Button>
                </Link>
                <Link href={"/Cadastro"}>
                  <Button variant="primary" size="md" className="font-medium">
                    Cadastrar-se
                    <LogIn className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </nav>

          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Descubra seu DNA de
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                Fã da FURIA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Conecte-se, compartilhe sua paixão e desbloqueie recompensas
              exclusivas como verdadeiro membro da família FURIA.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="min-w-[200px]">
                Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conquistas Exclusivas</h3>
              <p className="text-gray-400">
                Desbloqueie badges e recompensas únicas baseadas no seu nível de
                engajamento com a FURIA.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Comunidade FURIA</h3>
              <p className="text-gray-400">
                Conecte-se com outros fãs apaixonados e participe de eventos
                exclusivos da comunidade.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gamepad2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Perfil Personalizado</h3>
              <p className="text-gray-400">
                Crie seu perfil único mostrando seus jogos favoritos e momentos
                marcantes com a FURIA.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Pronto para fazer parte da família?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de fãs que já descobriram seu DNA FURIA e fazem
            parte desta história.
          </p>
          <Button size="lg">
            Criar Meu Perfil
            <LogIn className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src={logo} alt="Logo" className="w-8 h-8 mr-2" />
              <Image src={furia} alt="Furia" className="w-18" />
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FURIA Esports. Todos os direitos
              reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
