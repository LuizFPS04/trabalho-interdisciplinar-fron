// src/contexts/UserContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../../backend/types/userType';

// Definindo o tipo do contexto
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  hasUserLogged: () => boolean;
}

// Criando o contexto
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Criando o Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Função para limpar o usuário
  const clearUser = () => {
    setUser(null);
  };

  // Função para verificar se o usuário está logado
  const hasUserLogged = () => {
    return user !== null;
  };

  return (
    <UserContext.Provider value={{ user, setUser, clearUser, hasUserLogged }}>
      {children}
    </UserContext.Provider>
  );
};