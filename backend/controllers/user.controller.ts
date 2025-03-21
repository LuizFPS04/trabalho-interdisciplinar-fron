import * as userService from '../services/user.service';
import { UserFactory } from '../factories/user.factory';
import { Request, Response } from 'express';

export async function createUser(req: Request, res: Response): Promise<any> {
    try {

        const { name, email, nickname, password, birth, role } = req.body;
        
        const birthDate = new Date(birth);

        if (isNaN(birthDate.getTime())) {
            return res.status(400).send({
                success: false,
                message: 'Campo birth está com formato de data inválido.',
            });
        }

        const userType = role || 'normal';

        const newUser: any = UserFactory.createUser(userType, { name, email, nickname, password, birth: birthDate });

        const createdUser = await userService.createUser(newUser);

        if (!createdUser) {
            return res.status(400).send({
                success: false,
                message: 'Failed to create user',
            });
        }

        return res.status(201).send({
            success: true,
            message: 'User created successfully',
            data: createdUser,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getAllUsers(req: Request, res: Response): Promise<any> {
    try {
        const users = await userService.getAllUsers();

        if (!users) {
            return res.status(404).send({
                success: false,
                message: 'No users found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Users fetched successfully',
            data: users,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getUserWithDetails(req: Request, res: Response): Promise<any> {
    try {
        const field: any = req.query.email || req.query.nickname;

        const user = await userService.getUserWithDetails(field);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: `User not found with ${field}`,
            });
        }

        return res.status(200).send({
            success: true,
            message: 'User fetched successfully',
            data: user,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getUserById(req: Request, res: Response): Promise<any> {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(Number(id));

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'User fetched successfully',
            data: user,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getUserByMail(req: Request, res: Response): Promise<any> {
    try {
        const email = req.query.email as string;
        const user = await userService.getUserByMail(email);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'User fetched successfully',
            data: user,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getUserByNickname(req: Request, res: Response): Promise<any> {
    try {
        const nickname = req.query.nickname as string;
        const user = await userService.getUserByNickname(nickname);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'User fetched successfully',
            data: user,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function updateUser(req: Request, res: Response): Promise<any> {
    try {
        const field: any = req.query.email || req.query.nickname;
        const { name, email, nickname, password, role } = req.body;
        const userType = role || 'normal';

        const updatedUser: any = UserFactory.createUser(userType, { name, email, nickname, password });

        const user = await userService.updateUser(field, updatedUser);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'User updated successfully',
            data: user,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function deleteUser(req: Request, res: Response): Promise<any> {
    try {
        const field: any = req.query.email || req.query.nickname;

        const user = await userService.deleteUser(field);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'User deleted successfully',
            data: user,
        }); 
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}