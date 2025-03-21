import { prismaClient } from "../config/db";
import { Result } from "@prisma/client";

export async function getAllResults(): Promise<Result[]> {
    return prismaClient.result.findMany();
}

export async function getResultsWithUserAndQuiz(): Promise<Result[]> {
    return prismaClient.result.findMany({
        include: {
            user: true,
            quiz: true,
        },
    });
}


export async function getResultById(id: number): Promise<Result | null> {
    return prismaClient.result.findUnique({
        where: {
            id,
        },
    });
}

export async function getResultByUserId(userId: number): Promise<Result[]> {
    return prismaClient.result.findMany({
        where: {
            userId,
        },
    });
}

export async function getResultByQuizId(quizId: number): Promise<Result[]> {
    return prismaClient.result.findMany({
        where: {
            quizId,
        },
    });
}

export async function createResult(result: Result): Promise<Result> {
    return prismaClient.result.create({
        data: result,
    });
}

export async function updateResult(id: number, result: Result): Promise<Result> {
    return prismaClient.result.update({
        where: {
            id,
        },
        data: result,
    });
}

export async function deleteResult(id: number): Promise<Result> {
    return prismaClient.result.delete({
        where: {
            id,
        },
    });
}