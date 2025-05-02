import React, { useRef } from "react";
import { UserFormData } from "../types";

interface DocumentUploadFormProps {
  formData: UserFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onNext: () => void;
  onPrev: () => void;
}

const DocumentUploadForm: React.FC<DocumentUploadFormProps> = ({
  formData,
  onChange,
  onNext,
  onPrev,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange({
        ...e,
        target: {
          ...e.target,
          name: "idDocument",
          value: e.target.files[0],
        },
      } as any);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-mono font-bold tracking-tight mb-6">
        VERIFICAÇÃO DE IDENTIDADE
      </h2>

      <div className="space-y-6">
        <div>
          <p className="text-sm font-mono mb-4">
            Envie um documento (RG or CNH)
          </p>

          <input
            type="file"
            id="idDocument"
            name="idDocument"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <div
            onClick={triggerFileInput}
            className="w-full h-48 border-2 border-dashed border-gray-800 flex flex-col items-center justify-center cursor-pointer hover:border-black transition-all duration-300"
          >
            {formData.idDocument ? (
              <div className="text-center">
                <p className="font-mono font-bold">Arquivo Selecionado:</p>
                <p className="font-mono text-sm">
                  {(formData.idDocument as File).name}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="font-mono uppercase">Clique para selecionar um arquivo.</p>
                <p className="font-mono text-sm text-gray-500 mt-2">
                  JPG, PNG or PDF
                </p>
              </div>
            )}
          </div>
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
          disabled={!formData.idDocument}
          className="w-1/2 py-3 px-6 bg-black text-white font-mono uppercase tracking-wider hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform"
        >
          Proximo
        </button>
      </div>
    </form>
  );
};

export default DocumentUploadForm;
