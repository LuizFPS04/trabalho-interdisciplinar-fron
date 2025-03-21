import { Result } from "./resultType";
import { Quiz } from "./quizType";
import { Ranking } from "./rankingType";

export interface User {
  id: number;
  email: string;
  nickname: string;
  password: string;
  name: string;
  birth: Date;
  role?: string | null;
  createdAt?: string;
  updatedAt?: string;
  quizzes?: Quiz[];
  results?: any;
  rankings?: Ranking[];
};

export interface JwtPayload {
  id: number;
  email: string;
  role?: string;
}