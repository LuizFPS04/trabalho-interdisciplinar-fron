import { prismaClient } from "../config/db";
import { Ranking } from "@prisma/client";

export async function getAllRankings(): Promise<Ranking[]> {
    return prismaClient.ranking.findMany();
}

export async function getRankingWithUserAndQuiz(id: number): Promise<Ranking | null> {
    return prismaClient.ranking.findUnique({
        where: { id },
        include: {
            user: true,
            quiz: true,
        },
    });
}


export async function getRankingById(id: number): Promise<Ranking | null> {
    return prismaClient.ranking.findUnique({
        where: {
            id,
        },
    });
}

export async function getRankingByUserId(userId: number): Promise<Ranking[]> {
    return prismaClient.ranking.findMany({
        where: {
            userId,
        },
    });
}

export async function getRankingByQuizId(quizId: number): Promise<Ranking[]> {
    return prismaClient.ranking.findMany({
        where: {
            quizId,
        },
    });
}

export async function createRanking(ranking: Ranking): Promise<Ranking> {
    return prismaClient.ranking.create({
        data: ranking,
    });
}

export async function updateRanking(id: number, ranking: Ranking): Promise<Ranking> {
    return prismaClient.ranking.update({
        where: {
            id,
        },
        data: ranking,
    });
}

export async function deleteRanking(id: number): Promise<Ranking> {
    return prismaClient.ranking.delete({
        where: {
            id,
        },
    });
}