import React from "react";
import Link from "next/link";

interface RegistrationSuccessProps {
  onReset: () => void;
}

const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({
  onReset,
}) => {
  return (
    <div className="text-center space-y-6 animate-fadeIn">
      <h2 className="text-3xl font-mono font-bold tracking-tight mb-4">
        NIVEL COMPLETO!
      </h2>
      <p className="font-mono text-lg mb-8">Seu cadastro está completo.</p>

      <div className="flex justify-center">
        <Link href="/Entrar">
          <button
            onClick={onReset}
            className="py-3 px-8 bg-black text-white font-mono uppercase tracking-wider hover:bg-gray-900 transition-all duration-300 transform"
          >
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
