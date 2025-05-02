import React from "react";
import { UserFormData } from "../types";

interface PersonalInfoFormProps {
  formData: UserFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onNext: () => void;
  onPrev: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formData,
  onChange,
  onNext,
  onPrev,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const isFormValid = () => {
    return formData.address.trim() !== "";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-mono font-bold tracking-tight mb-6">
        ENDEREÇO RESIDENCIAL
      </h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-mono uppercase tracking-wider mb-1"
          >
            Endereço
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={onChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-gray-800 focus:border-black focus:ring-0 font-mono transition-all duration-300"
            required
          />
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
          type="submit"
          disabled={!isFormValid()}
          className="w-1/2 py-3 px-6 bg-black text-white font-mono uppercase tracking-wider hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform"
        >
          Proximo
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
