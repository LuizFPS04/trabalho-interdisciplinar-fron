// src/contexts/QuizContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { Quiz } from '../../backend/types/quizType';

// Definindo o tipo do contexto
interface QuizContextType {
    quizzes: Quiz | null;
    setQuizzes: (user: Quiz | null) => void;
    hasQuizzes: () => boolean;
}

// Criando o contexto
export const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Criando o Provider
export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [quizzes, setQuizzes] = useState<Quiz | null>(null);

    const hasQuizzes = () => {
        return quizzes !== null;
    };
  
  return (
    <QuizContext.Provider value={{quizzes, setQuizzes, hasQuizzes}}>
      {children}
    </QuizContext.Provider>
  );
};

