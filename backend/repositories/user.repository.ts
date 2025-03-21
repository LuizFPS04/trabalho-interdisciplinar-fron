import bcrypt from "bcryptjs";
import { prismaClient } from "../config/db";
import { User } from "@prisma/client";

export async function getAllUsers(): Promise<User[]> {
    return prismaClient.user.findMany();
}

export async function getUserById(id: number): Promise<User | null> {
    return prismaClient.user.findUnique({
        where: {
            id,
        },
    });
}

export async function getUserByMail(email: string): Promise<User | null> {
    return prismaClient.user.findUnique({
        where: {
            email,
        },
    });
}

export async function getUserByNickname(nickname: string): Promise<User | null> {
    return prismaClient.user.findUnique({
        where: {
            nickname,
        },
    });
}

export async function getUserByIdWithDetails(id: number): Promise<User | null> {
    return prismaClient.user.findUnique({
        where: { id },
        include: {
            quizzes: true,
            rankings: true,
            results: true
        },
    });
}

export async function createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    // Criptografando a senha
    const salt = await bcrypt.genSalt(10);  // Gera um salt para a criptografia
    const hashedPassword = await bcrypt.hash(userData.password, salt);  // Criptografa a senha

    // Agora, criando o usuário no banco com a senha criptografada
    return prismaClient.user.create({
        data: {
            ...userData,  // Espalha os dados do usuário
            password: hashedPassword,  // Substitui a senha original pela senha criptografada
        },
    });
}

export async function updateUser(id: number, user: User): Promise<User> {
    return prismaClient.user.update({
        where: {
            id,
        },
        data: user,
    });
}

export async function deleteUser(id: number): Promise<User> {
    return prismaClient.user.delete({
        where: {
            id,
        },
    });
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}