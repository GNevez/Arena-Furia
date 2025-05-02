import React from "react";
import { UserFormData } from "../types";

interface InterestsFormProps {
  formData: UserFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onNext: () => void;
  onPrev: () => void;
}

const InterestsForm: React.FC<InterestsFormProps> = ({
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
    return (
      formData.gamesPlayed.trim() !== "" &&
      formData.favoritePlayer.trim() !== ""
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-mono font-bold tracking-tight mb-6">
        PERFIL GAMER
      </h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="gamesPlayed"
            className="block text-sm font-mono uppercase tracking-wider mb-1"
          >
            Quais jogos você joga?
          </label>
          <textarea
            id="gamesPlayed"
            name="gamesPlayed"
            value={formData.gamesPlayed}
            onChange={onChange}
            rows={3}
            className="w-full px-4 py-3 bg-transparent border-2 border-gray-800 focus:border-black focus:ring-0 font-mono transition-all duration-300"
            required
            placeholder="CS:GO, League of Legends, Valorant..."
          />
        </div>

        <div>
          <label
            htmlFor="favoritePlayer"
            className="block text-sm font-mono uppercase tracking-wider mb-1"
          >
            Quem é seu jogador favorito?
          </label>
          <input
            type="text"
            id="favoritePlayer"
            name="favoritePlayer"
            value={formData.favoritePlayer}
            onChange={onChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-gray-800 focus:border-black focus:ring-0 font-mono transition-all duration-300"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="attendedEvents"
            name="attendedEvents"
            checked={formData.attendedEvents}
            onChange={(e) =>
              onChange({
                ...e,
                target: {
                  ...e.target,
                  name: "attendedEvents",
                  value: e.target.checked.toString(),
                },
              } as any)
            }
            className="h-5 w-5 border-2 border-gray-800 focus:ring-0"
          />
          <label
            htmlFor="attendedEvents"
            className="ml-2 block text-sm font-mono"
          >
            Eu ja participei de eventos de e-sports.
          </label>
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

export default InterestsForm;
