export interface UserFormData {
  name: string;
  email: string;
  senha: string;
  address: string;
  cpf: string;
  gamesPlayed: string;
  favoritePlayer: string;
  attendedEvents: boolean;
  idDocument: File | null;
}

export interface LoginData {
  email: string,
  senha: string,
}

export type FormStep = "personal" | "address" | "interests" | "document" | "review";
