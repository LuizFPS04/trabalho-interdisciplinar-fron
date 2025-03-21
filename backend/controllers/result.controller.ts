import * as resultService from '../services/result.service';
import { Request, Response } from 'express';


export async function createResult(req: Request, res: Response): Promise<any> {
    try {

        const body = req.body;

        const result = await resultService.createResult(body);

        if (!result) {
            return res.status(400).send({
                success: false,
                message: 'Failed to create result',
            });
        }

        return res.status(201).send({
            success: true,
            message: 'Result created successfully',
            data: result,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getAllResults(req: Request, res: Response): Promise<any> {
    try {

        const results = await resultService.getAllResults();

        if (!results) {
            return res.status(404).send({
                success: false,
                message: 'No results found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Results fetched successfully',
            data: results,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getResultsByUserId(req: Request, res: Response): Promise<any> {
    try {

        const userId = req.query.userId;

        const results = await resultService.getResultByUserId(Number(userId));

        if (!results) {
            return res.status(404).send({
                success: false,
                message: 'No results found for this user',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Results fetched successfully',
            data: results,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getResultsByQuizId(req: Request, res: Response): Promise<any> {
    try {

        const quiz_id = req.query.quizId;

        const results = await resultService.getResultByQuizId(Number(quiz_id));

        if (!results) {
            return res.status(404).send({
                success: false,
                message: 'No results found for this quiz',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Results fetched successfully',
            data: results,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getResultById(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const result = await resultService.getResultById(Number(id));

        if (!result) {
            return res.status(404).send({
                success: false,
                message: 'Result not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Result fetched successfully',
            data: result,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getResultsWithUserAndQuiz(req: Request, res: Response): Promise<any> {
    try {

        const results = await resultService.getResultsWithUserAndQuiz();

        if (!results) {
            return res.status(404).send({
                success: false,
                message: 'No results found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Results fetched successfully',
            data: results,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function updateResult(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;
        const body = req.body;

        const result = await resultService.updateResult(Number(id), body);

        if (!result) {
            return res.status(404).send({
                success: false,
                message: 'Result not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Result updated successfully',
            data: result,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function deleteResult(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const result = await resultService.deleteResult(Number(id));

        if (!result) {
            return res.status(404).send({
                success: false,
                message: 'Result not found',
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Result deleted successfully',
            data: result,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}