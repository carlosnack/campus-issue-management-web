"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // API recomendada no Next.js 13+

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter(); // API recomendada para redirecionamento

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, pass: password }),
            });

            const data = await response.json();

            if (data.statusCode === 401) {
                setError(data.message);
                return;
            }

            // Gerencie o token via Context ou Cookies (evitando localStorage)
            document.cookie = `token=${data.token}; path=/; secure; samesite=lax;`;

            // Redireciona para a página inicial após login bem-sucedido
            router.push("/home");
        } catch (err) {
            setError(String(err));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="relative w-64 mb-5">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
            <button
                type="submit"
                className="border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white"
            >
                Entrar
            </button>
        </form>
    );
}
