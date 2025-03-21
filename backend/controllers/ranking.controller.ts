import * as rankingService from '../services/ranking.service';
import { Request, Response } from 'express';


export async function createRanking(req: Request, res: Response): Promise<any> {
    try {

        const body = req.body;

        const ranking = await rankingService.createRanking(body);

        if (!ranking) {
            return res.status(400).send({
                success: false,
                message: 'Failed to create ranking',
            });
        }

        return res.status(201).send({
            success: true,
            message: 'Ranking created successfully',
            data: ranking,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getAllRankings(req: Request, res: Response): Promise<any> {
    try {

        const rankings = await rankingService.getAllRankings();

        if (!rankings) {
            return res.status(404).send({
                success: false,
                message: 'No rankings found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Rankings fetched successfully',
            data: rankings,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getRankingsByUserId(req: Request, res: Response): Promise<any> {
    try {

        const userId = req.query.userId;

        const rankings = await rankingService.getRankingByUserId(Number(userId));

        if (!rankings) {
            return res.status(404).send({
                success: false,
                message: 'No rankings found for this user',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Rankings fetched successfully',
            data: rankings,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getRankingsByQuizId(req: Request, res: Response): Promise<any> {
    try {

        const quiz_id = req.query.quizId;

        const rankings = await rankingService.getRankingByQuizId(Number(quiz_id));

        if (!rankings) {
            return res.status(404).send({
                success: false,
                message: 'No rankings found for this quiz',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Rankings fetched successfully',
            data: rankings,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getRankingById(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const ranking = await rankingService.getRankingById(Number(id));

        if (!ranking) {
            return res.status(404).send({
                success: false,
                message: 'Ranking not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Ranking fetched successfully',
            data: ranking,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getRankingsWithUserAndQuiz(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const rankings = await rankingService.getRankingWithUserAndQuiz(Number(id));

        if (!rankings) {
            return res.status(404).send({
                success: false,
                message: 'No rankings found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Rankings fetched successfully',
            data: rankings,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function updateRanking(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;
        const body = req.body;

        const ranking = await rankingService.updateRanking(Number(id), body);

        if (!ranking) {
            return res.status(404).send({
                success: false,
                message: 'Ranking not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Ranking updated successfully',
            data: ranking,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function deleteRanking(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const ranking = await rankingService.deleteRanking(Number(id));

        if (!ranking) {
            return res.status(404).send({
                success: false,
                message: 'Ranking not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Ranking deleted successfully',
            data: ranking,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}