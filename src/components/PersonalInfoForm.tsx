import React from "react";
import { UserFormData } from "../types";

interface PersonalInfoFormProps {
  formData: UserFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onNext: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formData,
  onChange,
  onNext,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.senha.trim() !== "" &&
      formData.cpf.trim() !== ""
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-mono font-bold tracking-tight mb-6">
        INFORMAÇÕES PESSOAIS
      </h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-mono uppercase tracking-wider mb-1"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-gray-800 focus:border-black focus:ring-0 font-mono transition-all duration-300"
            required
          />
        </div>
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
          />
        </div>

        <div>
          <label
            htmlFor="cpf"
            className="block text-sm font-mono uppercase tracking-wider mb-1"
          >
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={onChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-gray-800 focus:border-black focus:ring-0 font-mono transition-all duration-300"
            required
            maxLength={14}
            placeholder="000.000.000-00"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!isFormValid()}
        className="w-full py-3 px-6 bg-black text-white font-mono uppercase tracking-wider hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform"
      >
        Proximo
      </button>
    </form>
  );
};

export default PersonalInfoForm;
