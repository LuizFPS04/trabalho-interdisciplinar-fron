import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Quiz } from '../../backend/types/quizType';
import { QuizContext } from '../contexts/Quiz';

function QuizListPage() {
  const { theme } = useParams() ?? "";

  const navigate = useNavigate();
  const quizContext = useContext(QuizContext);
  const quiz = quizContext?.quizzes;

  const faunaQuizzes = Array.isArray(quiz) && quiz.filter(quiz => quiz.theme === "Fauna");
  const floraQuizzes = Array.isArray(quiz) && quiz.filter(quiz => quiz.theme === "Flora");
  const biomasQuizzes = Array.isArray(quiz) && quiz.filter(quiz => quiz.theme === "Biomas");
  const sustentabilidadeQuizzes = Array.isArray(quiz) && quiz.filter(quiz => quiz.theme === "Sustentabilidade");
 console.log(quizContext?.quizzes)

  const quizzes = {
    'fauna': faunaQuizzes,
    'flora': floraQuizzes,
    'biomas': biomasQuizzes,
    'sustentabilidade': sustentabilidadeQuizzes,
  };



  const themeTitles: Record<string, string> = {
    'fauna': 'Fauna Brasileira',
    'flora': 'Flora Brasileira',
    'biomas': 'Biomas do Brasil',
    'sustentabilidade': 'Sustentabilidade',
  };

  
  const themeTitle = themeTitles[theme?.toLowerCase() ?? ""]  ?? "";
  const currentQuizzes = quizzes[theme?.toLowerCase() ?? ""] ?? [];
  console.log(currentQuizzes)
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-green-800/50 rounded-lg p-8 backdrop-blur-sm">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-white hover:text-green-200 transition-colors mr-4"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-4xl font-bold text-white">Quizzes sobre {themeTitle}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentQuizzes.map((quiz) => 
          
          {
       
            return(
            <div key={quiz.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="h-4 overflow-hidden">
               
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-3">{quiz.title}</h3>
                <p className="text-gray-600 mb-4">{quiz.description}</p>
                <button 
                  onClick={() => navigate(`/quiz/${theme}/${quiz.id}`)}
                  className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Iniciar Quiz
                </button>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
}

export default QuizListPage;