import { User } from "./userType";
import { Ranking } from "./rankingType";
import { Result } from "./resultType";

export interface Quiz {
    id: number;
    title: string;
    theme: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    questions?: Question[];
    results?: Result[];
    users?: User[];
    rankings?: Ranking[];
};

export interface Question {
    id: number;
    content: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    quizId: number;
    quiz?: Quiz;
    answers?: Answer[];
};

export interface Answer {
    id: number;
    content: string;
    isCorrect: boolean;
    createdAt: Date | null;
    updatedAt: Date | null;
    questionId: number;
    question?: Question;
};

export interface AnswerData {
    content: string;
    isCorrect: boolean;
}

export interface QuestionData {
    content: string;
    answers: AnswerData[];
}

export interface QuizData {
    title: string;
    theme: string;
    description: string;
    questions: QuestionData[];
}