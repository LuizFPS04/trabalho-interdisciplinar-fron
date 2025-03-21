import * as resultRepository from '../repositories/result.repository';
import { Result } from '@prisma/client';

export async function getAllResults(): Promise<Result[]> {
    return resultRepository.getAllResults();
}

export async function getResultsWithUserAndQuiz(): Promise<Result[] | null> {
    return resultRepository.getResultsWithUserAndQuiz();
}

export async function getResultById(id: number): Promise<Result | null> {
    return resultRepository.getResultById(id);
}

export async function getResultByUserId(userId: number): Promise<Result[]> {
    return resultRepository.getResultByUserId(userId);
}

export async function getResultByQuizId(quizId: number): Promise<Result[]> {
    return resultRepository.getResultByQuizId(quizId);
}

export async function createResult(result: Result): Promise<Result> {
    return resultRepository.createResult(result);
}

export async function updateResult(id: number, result: Result): Promise<Result> {
    return resultRepository.updateResult(id, result);
}

export async function deleteResult(id: number): Promise<Result> {
    return resultRepository.deleteResult(id);
}