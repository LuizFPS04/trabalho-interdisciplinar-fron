import * as userRepository from "../repositories/user.repository";
import { User } from "@prisma/client";

export async function getAllUsers(): Promise<User[]> {
    return userRepository.getAllUsers();
}

export async function getUserById(id: number): Promise<User | null> {
    return userRepository.getUserById(id);
}

export async function getUserByMail(email: string): Promise<User | null> {
    return userRepository.getUserByMail(email);
}

export async function getUserByNickname(nickname: string): Promise<User | null> {
    return userRepository.getUserByNickname(nickname);
}

export async function getUserWithDetails(field: string): Promise<User | null> {
    let searchUser: User | null = await userRepository.getUserByMail(field);

    if (!searchUser) {
        searchUser = await userRepository.getUserByNickname(field);
        if (!searchUser) {
            throw new Error("User not found");
        }
    }

    const id: number = searchUser.id;

    return userRepository.getUserByIdWithDetails(id);
}

export async function createUser(user: User): Promise<User> {
    return userRepository.createUser(user);
}

export async function updateUser(field: string, user: User): Promise<User> {
    let searchUser: User | null = await userRepository.getUserByMail(field);

    if (!searchUser) {
        searchUser = await userRepository.getUserByNickname(field);
        if (!searchUser) {
            throw new Error("User not found");
        }
    }

    const id: number = searchUser.id;
    return userRepository.updateUser(id, user);
}

export async function deleteUser(field: string): Promise<User> {
    let searchUser: User | null = await userRepository.getUserByMail(field);

    if (!searchUser) {
        searchUser = await userRepository.getUserByNickname(field);
        if (!searchUser) {
            throw new Error("User not found");
        }
    }

    const id: number = searchUser.id;
    return userRepository.deleteUser(id);
}