import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import React from 'react';
import { UserProvider } from './contexts/User'; 
import { QuizProvider } from './contexts/Quiz.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider> 
        <QuizProvider>
          <App />
        </QuizProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
