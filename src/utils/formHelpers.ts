import { FormData, LoginData } from "../types";

export const initialFormData: FormData = {
  name: "",
  email: "",
  senha: "",
  address: "",
  cpf: "",
  gamesPlayed: "",
  favoritePlayer: "",
  attendedEvents: false,
  idDocument: null,
};

export const initialLoginData: LoginData = {
  email: "",
  senha: ""
};

export const formatCPF = (cpf: string): string => {
  // Remove any non-digit characters
  const digits = cpf.replace(/\D/g, "");

  // Apply CPF format (XXX.XXX.XXX-XX)
  if (digits.length <= 3) {
    return digits;
  } else if (digits.length <= 6) {
    return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  } else if (digits.length <= 9) {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  } else {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(
      6,
      9
    )}-${digits.slice(9, 11)}`;
  }
};

export const validateForm = (formData: FormData, step: string): boolean => {
  switch (step) {
    case "personal":
      return (
        formData.name.trim() !== "" &&
        formData.address.trim() !== "" &&
        formData.cpf.trim() !== ""
      );
    case "interests":
      return (
        formData.gamesPlayed.trim() !== "" &&
        formData.favoritePlayer.trim() !== ""
      );
    case "document":
      return !!formData.idDocument;
    default:
      return true;
  }
};
