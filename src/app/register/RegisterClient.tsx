"use client"; // Declara o componente como Client Component

import { useState } from "react";
import RegisterButton from "./RegisterButton"; // Importa o botão (também Client Component)

export default function RegisterClient() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <>
      <div
        className={`w-full p-5 ${
          isLogin ? "order-2" : "order-1"
        } transition-all duration-500`}
      >
        <div className="text-left font-bold">
          <span className="text-black">CampusIssue</span>
          <span className="text-blue-600">Management</span>
        </div>
        <div className="py-10">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            {isLogin ? "Entre na sua conta" : "Crie sua conta"}
          </h2>
          <div className="border-2 w-10 border-blue-600 inline-block mb-2"></div>
          <div className="flex flex-col items-center">
            {isLogin ? (
              <>
                <div className="w-64 mb-3">
                  <label
                    htmlFor="email"
                    className="block text-left text-gray-600 font-semibold mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    className="w-full bg-gray-100 p-2 rounded-full outline-none text-sm"
                  />
                </div>
                <div className="w-64 mb-5">
                  <label
                    htmlFor="password"
                    className="block text-left text-gray-600 font-semibold mb-1"
                  >
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite sua senha"
                    className="w-full bg-gray-100 p-2 rounded-full outline-none text-sm"
                  />
                </div>
                <button
                  className="bg-blue-600 text-white rounded-full px-12 py-2 font-semibold hover:bg-blue-700"
                  onClick={() => alert("Login realizado!")}
                >
                  Entrar
                </button>
              </>
            ) : (
              <>
                <div className="w-64 mb-3">
                  <label
                    htmlFor="name"
                    className="block text-left text-gray-600 font-semibold mb-1"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite seu nome"
                    className="w-full bg-gray-100 p-2 rounded-full outline-none text-sm"
                  />
                </div>
                <div className="w-64 mb-3">
                  <label
                    htmlFor="email"
                    className="block text-left text-gray-600 font-semibold mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    className="w-full bg-gray-100 p-2 rounded-full outline-none text-sm"
                  />
                </div>
                <div className="w-64 mb-3">
                  <label
                    htmlFor="password"
                    className="block text-left text-gray-600 font-semibold mb-1"
                  >
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite sua senha"
                    className="w-full bg-gray-100 p-2 rounded-full outline-none text-sm"
                  />
                </div>
                <div className="w-64 mb-5">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-left text-gray-600 font-semibold mb-1"
                  >
                    Confirme sua senha
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirme sua senha"
                    className="w-full bg-gray-100 p-2 rounded-full outline-none text-sm"
                  />
                </div>
                <RegisterButton />
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={`w-full p-5 bg-blue-600 text-white rounded-r-2xl ${
          isLogin ? "order-1" : "order-2"
        } flex flex-col justify-center items-center transition-all duration-500`}
      >
        <h2 className="text-2xl font-bold mb-3">
          {isLogin ? "Bem-vindo!" : "Já tem uma conta?"}
        </h2>
        <p className="text-sm mb-5">
          {isLogin
            ? "Se ainda não tem uma conta, registre-se agora mesmo!"
            : "Faça login para acessar sua conta"}
        </p>
        <button
          onClick={toggleMode}
          className="bg-white text-blue-600 rounded-full px-12 py-2 font-semibold hover:bg-gray-100"
        >
          {isLogin ? "Registrar-se" : "Entrar"}
        </button>
      </div>
    </>
  );
}
