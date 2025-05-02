import React from "react";
import { LoginData } from "../../types";

interface LoginProps {
  formData: LoginData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const Login: React.FC<LoginProps> = ({ formData, onChange, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const isFormValid = () => {
    return formData.email.trim() !== "" && formData.senha.trim() !== "";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-mono font-bold tracking-tight mb-6">
        INFORMAÇÕES PESSOAIS
      </h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-mono uppercase tracking-wider mb-1"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-gray-800 focus:border-black focus:ring-0 font-mono transition-all duration-300"
            placeholder="Digite seu email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="senha"
            className="block text-sm font-mono uppercase tracking-wider mb-1"
          >
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={onChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-gray-800 focus:border-black focus:ring-0 font-mono transition-all duration-300"
            required
            placeholder="Digite sua senha"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!isFormValid()}
        className="w-full py-3 px-6 bg-black text-white font-mono uppercase tracking-wider hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform"
      >
        Entrar
      </button>
    </form>
  );
};

export default Login;
