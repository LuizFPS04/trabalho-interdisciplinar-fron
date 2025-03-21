import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizListPage from './pages/QuizListPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import RankingPage from './pages/RankingPage';
import Navbar from './components/Navbar';
import { UserContext } from './contexts/User';
import axios from 'axios';
import { QuizContext } from './contexts/Quiz';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const quizContext = useContext(QuizContext)
  const userContext = useContext(UserContext);

  const getQuiz = async () =>{
    try {
      const response = await axios.get(
        "https://biogenius.onrender.com/api/v1/quiz"
      );

      const data = response.data; 
      if (response.status === 200 || response.status === 201) {
        quizContext?.setQuizzes(data.data);

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
  }

  useEffect(()=>{
    if(!quizContext?.hasQuizzes()){
      getQuiz();
    }
  },[])

  const isUserLogged = (isLogged:boolean) => {
    setIsAuthenticated(isLogged);
    navigate('/'); 
  };

  return (
    <div className="min-h-screen bg-green-700/80">
      <Navbar isAuthenticated={isAuthenticated}  />
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/quizzes/:theme" element={<QuizListPage />} />
        <Route path="/quiz/:theme/:quizId" element={<QuizPage />} />
        <Route path="/login" element={<LoginPage isUserLogged={isUserLogged} />} />
        {/*     <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} onLogin={handleLogin} />} /> */}
        <Route path="/register" element={<RegisterPage onRegister={isUserLogged} />} />

        {/* Rotas protegidas */}
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <ProfilePage isUserLogged={isUserLogged}/>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/ranking"
          element={
            isAuthenticated ? (
              <RankingPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Redirecionamento para páginas não encontradas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;