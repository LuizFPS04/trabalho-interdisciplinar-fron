export interface Quiz {
    id: number;
    title: string;
    theme: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    questions?: Question[];
    users?: User[];
    results?: Result[];
    rankings?: Ranking[];
}

export interface Question {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    quizId: number;
    quiz?: Quiz;
    answers?: Answer[];
}

export interface Answer {
    id: number;
    content: string;
    isCorrect: boolean;
    createdAt: Date;
    updatedAt: Date;
    questionId: number;
    question?: Question;
}

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

export interface Result {
    id: number;
    score: number;
    createdAt?: Date;
    updatedAt?: Date;
    user?: User;
    quiz?: Quiz;
}

export interface User {
    id: number;
    nickname: string;
    email: string;
    password: string;
    name: string;
    birth: Date;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
    quizzes?: Quiz[];
    results?: Result[];
    Ranking?: Ranking[];
}

export interface Ranking {
    id: number;
    position: number;
    score: number;
    userId: number;
    quizId: number;
    user?: User;
    quiz?: Quiz;
    createdAt?: Date;
    updatedAt?: Date;
}