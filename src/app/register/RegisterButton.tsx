"use client";

export default function RegisterButton() {
  const handleRegister = () => {
    alert("Registro realizado com sucesso!");
    // Adicione lógica para redirecionar ou chamar APIs aqui
  };

  return (
    <button
      className="bg-blue-600 text-white rounded-full px-12 py-2 font-semibold hover:bg-blue-700"
      onClick={handleRegister}
    >
      Registrar-se
    </button>
  );
}
