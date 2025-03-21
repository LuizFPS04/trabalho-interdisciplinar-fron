import { Quiz } from "./quizType";
import { User } from "./userType";

export type Ranking = {
    id: number;
    score: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user?: User;
    quizId: number;
    quiz?: Quiz;
  };