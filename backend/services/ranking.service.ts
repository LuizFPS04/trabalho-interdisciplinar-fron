import * as rankingRepository from '../repositories/ranking.repository';
import { Ranking } from '@prisma/client';

export async function getAllRankings(): Promise<Ranking[]> {
    return rankingRepository.getAllRankings();
}

export async function getRankingWithUserAndQuiz(id: number): Promise<Ranking | null> {
    return rankingRepository.getRankingWithUserAndQuiz(id);
}

export async function getRankingById(id: number): Promise<Ranking | null> {
    return rankingRepository.getRankingById(id);
}

export async function getRankingByUserId(userId: number): Promise<Ranking[]> {
    return rankingRepository.getRankingByUserId(userId);
}

export async function getRankingByQuizId(quizId: number): Promise<Ranking[]> {
    return rankingRepository.getRankingByQuizId(quizId);
}

export async function createRanking(ranking: Ranking): Promise<Ranking> {
    return rankingRepository.createRanking(ranking);
}

export async function updateRanking(id: number, ranking: Ranking): Promise<Ranking> {
    return rankingRepository.updateRanking(id, ranking);
}

export async function deleteRanking(id: number): Promise<Ranking> {
    return rankingRepository.deleteRanking(id);
}