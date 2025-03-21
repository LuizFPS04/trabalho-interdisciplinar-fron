import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Lock } from 'lucide-react';
import axios from 'axios';
import { UserContext } from '../contexts/User';

type LoginProps = {
  isUserLogged: (headers: any) => void;
}

function LoginPage({ isUserLogged }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Estado para controlar o loading
  const userContext = useContext(UserContext);
  let token;

  const login = async (email: string, password: string) => {
    const userLogin = {
      email,
      password,
    };

    setLoading(true); // Ativa o estado de loading

    try {
      const response = await axios.post(
        "https://biogenius.onrender.com/api/v1/login",
        userLogin,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      if (response.status === 200 || response.status === 201) {
        const userId = response.data.id;

        const findUser = await axios.get(`https://biogenius.onrender.com/api/v1/user/${userId}`, {
          withCredentials: true
        });

        if (!userContext?.hasUserLogged() && findUser && findUser.data.data) {
          userContext?.setUser(findUser.data.data);
          isUserLogged(true);
        }

      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro ao logar:", error.response?.data?.message || error.message);
        alert(`Erro: ${error.response?.data?.message || "Erro ao conectar com o servidor."}`);
      } else {
        console.error("Erro desconhecido:", error);
        alert("Erro desconhecido ao conectar com o servidor.");
      }
    } finally {
      setLoading(false); // Desativa o estado de loading
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="w-full p-4 mt-8">
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-green-100 p-3 rounded-full">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Bem-vindo
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Não tem uma conta?{' '}
            <Link to="/register" className="font-medium text-green-600 hover:text-green-500">
              Cadastre-se
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Senha"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
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
              "Entrar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;