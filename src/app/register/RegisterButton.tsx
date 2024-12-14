"use client";

import { useState } from "react";

export default function RegisterButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    setLoading(true);
    setError(null);

    // Coletar os dados do formulário
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)?.value;
    const confirmPassword = (document.getElementById("confirmPassword") as HTMLInputElement)?.value;

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      setLoading(false);
      return;
    }

    const payload = {
      name,
      email,
      picture: "default.jpg", // Substitua por lógica para enviar a foto, se necessário
      userRole: "user", // Pode ser ajustado conforme o contexto
      extras: {},
    };

    try {
      const response = await fetch("/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao registrar usuário.");
      }

      alert("Registro realizado com sucesso!");
      // Redirecionar ou limpar o formulário
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className="bg-blue-600 text-white rounded-full px-12 py-2 font-semibold hover:bg-blue-700"
        onClick={handleRegister}
        disabled={loading}
      >
        {loading ? "Registrando..." : "Registrar-se"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
