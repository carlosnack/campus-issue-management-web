'use client';

import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    const payload = {
      name,
      email,
      picture: "", // Substitua por lógica para enviar a foto, se necessário
      userRole: "user", // Pode ser ajustado conforme o contexto
      extras: {
        password,
        passwordConfirm: confirmPassword,
      }
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/users/create", {
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
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-full p-5">
            <div className="text-left font-bold">
              <span className="text-black">CampusIssue</span>
              <span className="text-blue-600">Management</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">
                Crie sua conta para registrar tickets
              </h2>
              <div className="border-2 w-10 border-blue-600 inline-block mb-2"></div>
              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="relative w-64 mb-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=" "
                    className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-700 bg-gray-100 border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Nome Completo
                  </label>
                </div>
                <div className="relative w-64 mb-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-700 bg-gray-100 border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Email
                  </label>
                </div>
                <div className="relative w-64 mb-5">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=" "
                    className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-700 bg-gray-100 border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Senha
                  </label>
                </div>
                <div className="relative w-64 mb-5">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder=" "
                    className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-700 bg-gray-100 border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Confirme a Senha
                  </label>
                </div>
                <button
                  type="submit"
                  className="border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white"
                  disabled={loading}
                >
                  {loading ? "Registrando..." : "Registrar"}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
