import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Result } from '../types';
import { Trophy, Medal, Star, Calendar, Mail, LogOut, Cake } from 'lucide-react';
import { UserContext } from '../contexts/User';
import moment from 'moment';
import "moment/locale/pt-br";
import axios from 'axios';
moment.locale("pt-br");

type RegisterProps = {
  isUserLogged: (headers: any) => void;
}

function ProfilePage({ isUserLogged }: RegisterProps) {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const [userData, setUserData] = useState<User | null>(null);
  const date = moment();

  const handleLogout = () => {
    userContext?.clearUser();
    isUserLogged(false);
    navigate('/'); 
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://biogenius.onrender.com/api/v1/user/${userContext?.user?.id ?? ""}`, {
          withCredentials: true
        });

        if (response.status === 200 || response.status === 201) {
          const data = response.data.data;
          setUserData(data);

          if (data) {
            userContext?.setUser(data);
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
      }
    };

    fetchUserData();
  }, [userContext]);

  const user = userData ?? userContext?.user;
  const birth = moment(user?.birth);

  const totalScore = user?.results ? user?.results.reduce((acc, current) =>
    acc + parseInt(current.score), 0
  ) : 0;

  const averageScore = isNaN(totalScore / user?.results?.length) ? 0 : totalScore / user?.results?.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-green-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-green-600">{user?.name.charAt(0)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
                  <p className="text-gray-500">@{user?.nickname}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-green-600" />
                    <span>{user?.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-green-600" />
                    <span>Membro desde {moment(user?.createdAt).format("DD [do] MM [de] YYYY")}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Cake className="w-5 h-5 mr-3 text-green-600" />
                    <span>{date.diff(birth, 'year')} anos</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full mt-4 flex items-center justify-center space-x-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                  >
                    <LogOut size={20} />
                    <span>Sair da conta</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Pontuação Total</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600">{totalScore}</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-2">
                    <Medal className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Quizzes Completados</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600">{user?.results?.length || 0}</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-2">
                    <Star className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Média de Pontos</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600">{averageScore.toFixed(1)}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Histórico de Quizzes</h3>
                <div className="space-y-4">
                  {user?.results?.map((result) => (
                    <div key={result.id} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-800">{result.quiz?.title}</h4>
                          <p className="text-sm text-gray-500">
                            Completado em {moment(result.createdAt).format("DD [do] MM [de] YYYY")}
                          </p>
                        </div>
                        <div className="bg-green-100 px-3 py-1 rounded-full">
                          <span className="text-green-600 font-semibold">{result.score} pontos</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;