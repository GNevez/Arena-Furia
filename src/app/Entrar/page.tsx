"use client";

import React, { useState, useEffect } from "react";
import { LoginData } from "../../types";
import {
  initialFormData,
  formatCPF,
  initialLoginData,
} from "../../utils/formHelpers";
import Login from "../../components/Entrar/Login"

import furia from "../../assets/logo-furia.svg";
import logo from "../../assets/Furia_Esports_logo.png";
import Image from "next/image";
import Button from "../../UI/button";
import Link from "next/link";
import { LogIn } from "lucide-react";

import axios from "axios";

const Entrar: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>(initialLoginData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(0);

  // Rotate between background images
  useEffect(() => {
    const images = [
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg",
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
    ];

    const interval = setInterval(() => {
      setBackgroundImage((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getBackgroundImage = () => {
    const images = [
      "https://img-cdn.hltv.org/gallerypicture/MxHkMlj7n5aZCct0KUPdCy.jpg?ixlib=java-2.1.0&m=%2Fm.png&mw=160&mx=30&my=710&w=1200&s=7f299571019d4e09868f145add96c25e",
      "https://cdn.ome.lt/DjkGINDnvJDyDbRHGySwyJtO7mI=/1200x630/smart/extras/conteudos/furia-eliminada-iem-rio-2023-csgo.jpg",
      "https://conteudo.imguol.com.br/c/esporte/f9/2022/11/06/brasileiros-lotam-riocentro-para-apoiar-furia-no-major-2022-de-cs-1667771992113_v2_900x506.jpg",
    ];
    return images[backgroundImage];
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "cpf") {
      setFormData((prev) => ({ ...prev, [name]: formatCPF(value) }));
    }
    // Special handling for checkbox
    else if (name === "attendedEvents") {
      setFormData((prev) => ({ ...prev, [name]: value === "true" }));
    }
    // Handle file upload
    else if (
      name === "idDocument" &&
      e.target instanceof HTMLInputElement &&
      e.target.files
    ) {
      setFormData((prev) => ({ ...prev, [name]: e.target.files?.[0] || null }));
    }
    // Default handling
    else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };


  const handleSubmit = () => {

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center p-4 md:p-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${getBackgroundImage()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 2s ease-in-out",
      }}
    >
      <div className="flex items-center mb-12 gap-3">
        <Image src={logo} alt="Logo" className="w-18 h-18 " />
        <Image src={furia} alt="Furia" className="w-36" />
      </div>
      <div className="w-full max-w-md md:max-w-lg">
        <div className="bg-white p-8 shadow-2xl">
          <h1 className="text-3xl font-mono font-bold tracking-tight mb-2 text-center">
            LOGIN FURIOSO!
          </h1>
          <p className="text-center font-mono text-sm mb-8">
            Cadastre-se como um FURIOSO!
          </p>
          <Login
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Entrar;
