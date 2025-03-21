import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Question } from '../../backend/types/quizType';
import {Result} from "../../backend/types/resultType"
import { UserContext } from '../contexts/User';
import { QuizContext } from '../contexts/Quiz';
import axios from 'axios';

function QuizPage() {
  const { theme, quizId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const userContext = useContext(UserContext);
  const quizContext = useContext(QuizContext);
  const quiz = quizContext?.quizzes;
  const user = userContext?.user;
  const filteredQuiz = Array.isArray(quiz) && quiz.find(quiz => quiz.id == quizId);
  const questions = filteredQuiz?.questions ?? [];
  const [result, setResult] = useState<any>(null);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null && questions[currentQuestion].answers) {
      const isCorrect = questions[currentQuestion].answers[selectedAnswer].isCorrect;
      if (isCorrect) {
        setScore(score + 1);
      }
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleExitQuiz = () => {
    const confirmExit = window.confirm('Tem certeza que deseja sair? Seu progresso será perdido.');
    if (confirmExit) {
      navigate(`/quizzes/${theme}`);
    }
  };

  const postResult = async (result: any) => {
    try {
      const response = await axios.post(
        "https://biogenius.onrender.com/api/v1/result",
        result,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data; 
      if (response.status === 200 || response.status === 201) {
        console.log("Resultado guardado", data);
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
    } 
  };

  // const refreshUser = async () => {
  //   try {
  //     const response = await axios.get(`https://biogenius.onrender.com/api/v1/user/${user?.id ?? ""}`, {
  //       withCredentials: true
  //     });

  //     if (response.status === 200 || response.status === 201) {
  //       const data = response.data.data;

  //       if (data) {
  //         userContext?.setUser(data);
  //       }

  //     } else {
  //       alert(response.data.message);
  //     }
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       console.error("Erro ao logar:", error.response?.data?.message || error.message);
  //       alert(`Erro: ${error.response?.data?.message || "Erro ao conectar com o servidor."}`);
  //     } else {
  //       console.error("Erro desconhecido:", error);
  //       alert("Erro desconhecido ao conectar com o servidor.");
  //     }
  //   } 
  // };

  useEffect(() => {
    if (showResult) {
      const newResult = {
        userId: user?.id,
        score: score,
        quizId: parseInt(quizId ?? "")
      };
      setResult(newResult);
      postResult(newResult);
      // refreshUser();
    }
  }, [showResult]);

  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-green-800/50 rounded-lg p-8 backdrop-blur-sm max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Resultado do Quiz</h2>
          <div className="bg-white rounded-lg p-6">
            <p className="text-2xl text-green-800 mb-4">
              Você acertou {score} de {questions.length} questões!
            </p>
            <p className="text-gray-600 mb-6">
              Porcentagem de acerto: {((score / questions.length) * 100).toFixed(1)}%
            </p>
            <div className="space-y-4">
              <button
                onClick={() => navigate('/profile')}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
              >
                Ver Perfil
              </button>
              <button
                onClick={() => navigate(`/quizzes/${theme}`)}
                className="w-full bg-white border border-green-600 text-green-600 py-3 px-6 rounded-md hover:bg-green-50 transition-colors"
              >
                Voltar para lista de quizzes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8">
       <div className="bg-green-800/50 rounded-lg p-8 backdrop-blur-sm max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleExitQuiz}
              className="text-white hover:text-green-200 transition-colors flex items-center"
            >
              <ArrowLeft className="h-6 w-6" />
              <span className="ml-2">Sair do Quiz</span>
            </button>
            <h2 className="text-2xl font-bold text-white">Questão {currentQuestion + 1} de {questions.length}</h2>
          </div>
          <div className="text-white">
            Pontuação: {score}
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6">
          <p className="text-xl text-gray-800 mb-6">{currentQuestionData.content}</p>
          
          <div className="space-y-3">
            {currentQuestionData.answers?.map((answer, index) => (
              <button
                key={answer.id}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  selectedAnswer === index
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {answer.content}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className={`mt-6 w-full py-3 px-6 rounded-md transition-colors ${
              selectedAnswer === null
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {currentQuestion + 1 === questions.length ? 'Finalizar' : 'Próxima'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;