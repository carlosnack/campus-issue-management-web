// pages/login.tsx
import Head from "next/head";

interface LoginProps {
  errorMessage?: string;
}

export default function Login({ errorMessage }: LoginProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Login - CampusIssueManagement</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          {/* Login Section */}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-black">CampusIssue</span>
              <span className="text-blue-600">Management</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">
                Para registrar seu ticket, entre com seu email @unesp.br
              </h2>
              <div className="border-2 w-10 border-blue-600 inline-block mb-2"></div>
              <form
                method="post"
                action="/api/login"
                className="flex flex-col items-center"
              >
                <div className="relative w-64 mb-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
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
                {errorMessage && (
                  <p className="text-red-500 text-xs mb-4">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  className="border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white"
                >
                  Entrar
                </button>
              </form>
            </div>
          </div>
          {/* Info Section */}
          <div className="w-2/5 bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl py-36">
            <h2 className="text-3xl font-bold mb-2">Olá, Usuário do Campus</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Abra um ticket para registrar problemas de infraestrutura e/ou
              manutenção no campus para serem acompanhados pelas equipes de
              serviços internas.
            </p>
            <a
              href="/register"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-600"
            >
              Registrar-se
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
