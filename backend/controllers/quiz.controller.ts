import * as quizService from '../services/quiz.service';
import { Request, Response } from 'express';

export async function createCompleteQuiz(req: Request, res: Response): Promise<any> {
    try {

        const body = req.body;

        const createdQuiz = await quizService.createQuizWithQuestionsAndAnswers(body);

        if (!createdQuiz) {
            return res.status(400).send({
                success: false,
                message: 'Quiz not created: invalid data or service error',
            });
        }

        return res.status(201).send({
            success: true,
            message: 'Quiz created successfully',
            data: createdQuiz,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function createQuiz(req: Request, res: Response): Promise<any> {
    try {

        const body = req.body;

        const createdQuiz = await quizService.createQuiz(body);

        if (!createdQuiz) {
            return res.status(400).send({
                success: false,
                message: 'Quiz not created: invalid data or service error',
            });
        }

        return res.status(201).send({
            success: true,
            message: 'Quiz created successfully',
            data: createdQuiz,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getAllQuizzes(req: Request, res: Response): Promise<any> {
    try {
        const quizzes = await quizService.getAllQuizzes();

        return res.status(200).send({
            success: true,
            message: 'Quizzes fetched successfully',
            data: quizzes,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getQuizById(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const quiz = await quizService.getQuizById(Number(id));

        if (!quiz) {
            return res.status(404).send({
                success: false,
                message: 'Quiz not found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Quiz fetched successfully',
            data: quiz,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getQuizByTheme(req: Request, res: Response): Promise<any> {
    try {

        const theme: any = req.query.theme;

        const quiz = await quizService.getQuizByThemeWithQuestionsAndAnswers(theme);

        if (!quiz) {
            return res.status(404).send({
                success: false,
                message: 'Quiz not found'
            });
        }
        if (quiz.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'Quiz not found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Quiz fetched successfully',
            data: quiz,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function updateQuiz(req: Request, res: Response): Promise<any> {
    try {
        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            return res.status(400).send({
                success: false,
                message: 'Invalid or missing quiz id'
            });
        }

        const body = req.body;

        const updatedQuiz = await quizService.updateQuiz(Number(id), body);

        if (!updatedQuiz) {
            return res.status(400).send({
                success: false,
                message: 'Quiz not updated'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Quiz updated successfully',
            data: updatedQuiz,
        });

    }
    catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function deleteQuiz(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            return res.status(400).send({
                success: false,
                message: 'Invalid or missing quiz id'
            });
        }

        const quiz = await quizService.deleteQuiz(Number(id));

        return res.status(200).send({
            success: true,
            message: 'Quiz deleted successfully',
            data: quiz,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function createQuestion(req: Request, res: Response): Promise<any> {
    try {

        const body = req.body;

        const question = await quizService.createQuestion(body);

        if (!question) {
            return res.status(400).send({
                success: false,
                message: 'Question not created'
            });
        }

        return res.status(201).send({
            success: true,
            message: 'Question created successfully',
            data: question,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function updateQuestion(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            return res.status(400).send({
                success: false,
                message: 'Invalid or missing question id'
            });
        }

        const body = req.body;

        const question = await quizService.updateQuestion(Number(id), body);

        if (!question) {
            return res.status(400).send({
                success: false,
                message: 'Question not updated'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Question updated successfully',
            data: question,
        });

    }
    catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getQuestionById(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const question = await quizService.getQuestionById(Number(id));

        if (!question) {
            return res.status(404).send({
                success: false,
                message: 'Question not found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Question fetched successfully',
            data: question,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getQuestionsByQuizId(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const question = await quizService.getQuestionsByQuizId(Number(id));

        if (!question) {
            return res.status(404).send({
                success: false,
                message: 'Questions not found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Questions fetched successfully',
            data: question,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function deleteQuestion(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            return res.status(400).send({
                success: false,
                message: 'Invalid or missing question id'
            });
        }

        const question = await quizService.deleteQuestion(Number(id));

        return res.status(200).send({
            success: true,
            message: 'Question deleted successfully',
            data: question,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function createAnswer(req: Request, res: Response): Promise<any> {
    try {

        const body = req.body;

        const answer = await quizService.createAnswer(body);

        if (!answer) {
            return res.status(400).send({
                success: false,
                message: 'Answer not created'
            });
        }

        return res.status(201).send({
            success: true,
            message: 'Answer created successfully',
            data: answer,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getAnswerById(req: Request, res: Response): Promise<any> {
    try {
        const { id } = req.params;

        const answer = await quizService.getAnswerById(Number(id));

        if (!answer) {
            return res.status(404).send({ 
                success: false, 
                message: 'Answer not found' 
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Answer fetched successfully',
            data: answer,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getAnswersByQuestionId(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const answers = await quizService.getAnswersByQuestionId(Number(id));

        if (!answers) {
            return res.status(404).send({
                success: false,
                message: 'Answers not found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Answer fetched successfully',
            data: answers,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function updateAnswer(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            return res.status(400).send({
                success: false,
                message: 'Invalid or missing answer id'
            });
        }

        const body = req.body;
        const answer = await quizService.updateAnswer(Number(id), body);

        if (!answer) {
            return res.status(400).send({
                success: false,
                message: 'Answer not updated'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Answer updated successfully',
            data: answer,
        });

    }
    catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function deleteAnswer(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            return res.status(400).send({
                success: false,
                message: 'Invalid or missing answer id'
            });
        }

        const answer = await quizService.deleteAnswer(Number(id));

        return res.status(200).send({
            success: true,
            message: 'Answer deleted successfully',
            data: answer,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}