import { body, param, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

export const validateQuizCreation: any = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('questions').isArray({ min: 1 }).withMessage('At least one question is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        next();
    }
];

export const validateQuizId: any = [
    param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        next();
    }
];

export const validateQuestionCreation: any = [
    body('quizId').isInt({ min: 1 }).withMessage('Quiz ID must be a positive integer'),
    body('question').notEmpty().withMessage('Question is required'),
    body('answers').isArray({ min: 2 }).withMessage('At least two answers are required'),
    body('answers.*.text').notEmpty().withMessage('Answer text is required'),
    body('answers.*.isCorrect').isBoolean().withMessage('Answer correctness must be a boolean'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        next();
    }
];

export const validateAnswerCreation: any = [
    body('questionId').isInt({ min: 1 }).withMessage('Question ID must be a positive integer'),
    body('text').notEmpty().withMessage('Answer text is required'),
    body('isCorrect').isBoolean().withMessage('Answer correctness must be a boolean'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        next();
    }
];