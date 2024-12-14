import Head from "next/head";
import LoginForm from "./LoginForm";

export default function LoginPage() {
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
              {/* Formulário de Login */}
              <LoginForm />
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
