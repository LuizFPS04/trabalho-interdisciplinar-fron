import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";
import { UserContext } from "../contexts/User";
import { User as UserType } from "../../backend/types/userType";
import axios from "axios"; // Importando o Axios

type RegisterPageProps = {
  onRegister: (headers:any) => void;
};

function RegisterPage({ onRegister }: RegisterPageProps) {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); // Estado para controlar o loading
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const nickname = name.split(" ");
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!name || !birth) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const userData: Omit<
      UserType,
      "id" | "createdAt" | "updatedAt" | "quizzes" | "results" | "rankings"
    > = {
      email,
      password,
      name,
      birth: new Date(birth),
      role: "normal",
      nickname: nickname[0],
    };

    setLoading(true); 

    try {
      const response = await axios.post(
        "https://biogenius.onrender.com/api/v1/user",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data; 
      if (response.status === 200 || response.status === 201) {
        const registeredUser: UserType = data.data;
        console.log(registeredUser);
        userContext?.setUser(registeredUser);

       onRegister(true);

      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro ao criar conta:", error.response?.data?.message || error.message);
        alert(`Erro: ${error.response?.data?.message || "Erro ao conectar com o servidor."}`);
      } else {
        console.error("Erro desconhecido:", error);
        alert("Erro desconhecido ao conectar com o servidor.");
      }
    } finally {
      setLoading(false); // Desativa o estado de loading
    }
  };

  return (
    <div className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-green-800/30 backdrop-blur-sm"></div>

      <div className="max-w-md w-full space-y-8 relative">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="bg-green-100 p-3 rounded-full">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Crie sua conta
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Já tem uma conta?{" "}
              <Link
                to="/login"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Faça login
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Digite seu nome
                </label>
                <div className="relative mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900  rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Data de Nascimento */}
              <div>
                <label htmlFor="birth" className="block text-sm font-medium text-gray-700">
                  Digite sua data de nascimento
                </label>
                <div className="relative mt-1">
                  <input
                    id="birth"
                    name="birth"
                    type="date"
                    required
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900  rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Digite seu email
                </label>
                <div className="relative mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900  rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Escolha sua senha
                </label>
                <div className="relative mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900  rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Confirmar Senha */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirme a senha
                </label>
                <div className="relative mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900  rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Botão de Criar Conta */}
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              disabled={loading} // Desabilita o botão enquanto loading for true
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Carregando...
                </div>
              ) : (
                "Criar conta"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;