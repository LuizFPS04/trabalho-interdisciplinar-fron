import React, { useState } from 'react';
import { Trophy, Medal, Award, Search } from 'lucide-react';
import { Ranking, User } from '../types';

function RankingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('all');

  // Mock data - will be replaced with backend data
  const rankings: (Ranking & { user: User })[] = [
    {
      id: 1,
      position: 1,
      score: 280,
      userId: 1,
      quizId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: 1,
        nickname: "MariaEdu",
        email: "maria@example.com",
        password: "",
        name: "Maria Eduarda",
        birth: new Date(),
        role: "user"
      }
    },
    {
      id: 2,
      position: 2,
      score: 265,
      userId: 2,
      quizId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: 2,
        nickname: "PedroB",
        email: "pedro@example.com",
        password: "",
        name: "Pedro Barbosa",
        birth: new Date(),
        role: "user"
      }
    },
    {
      id: 3,
      position: 3,
      score: 250,
      userId: 3,
      quizId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: 3,
        nickname: "AnaSilva",
        email: "ana@example.com",
        password: "",
        name: "Ana Silva",
        birth: new Date(),
        role: "user"
      }
    }
  ];

  const themes = [
    { id: 'all', name: 'Geral' },
    { id: 'mata-atlantica', name: 'Mata Atlântica' },
    { id: 'fauna', name: 'Fauna' },
    { id: 'flora', name: 'Flora' },
    { id: 'biomas', name: 'Biomas' },
    { id: 'sustentabilidade', name: 'Sustentabilidade' }
  ];

  const filteredRankings = rankings.filter(ranking => 
    ranking.user.nickname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-8 h-8 text-yellow-400" />;
      case 2:
        return <Medal className="w-8 h-8 text-gray-400" />;
      case 3:
        return <Award className="w-8 h-8 text-amber-700" />;
      default:
        return <span className="text-2xl font-bold text-gray-600">{position}</span>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-green-800/50 backdrop-blur-sm rounded-lg p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Ranking</h1>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar jogador..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex-1">
              <select
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {themes.map(theme => (
                  <option key={theme.id} value={theme.id}>{theme.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Ranking Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Posição</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Jogador</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Pontuação</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Última Atualização</th>
                </tr>
              </thead>
              <tbody>
                {filteredRankings.map((ranking) => (
                  <tr key={ranking.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {getPositionIcon(ranking.position)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-gray-800">{ranking.user.name}</div>
                        <div className="text-sm text-gray-500">@{ranking.user.nickname}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-green-600">{ranking.score} pontos</div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {ranking.updatedAt.toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankingPage;