import { Router } from 'express';
import * as quizController from '../controllers/quiz.controller';

import { authMiddleware } from '../middlewares/authMiddleware';
import { authorize } from '../middlewares/authorizationMiddleware';
import { validateAnswerCreation, validateQuestionCreation, validateQuizCreation } from '../middlewares/validationQuizMiddleware';

const router = Router();

router.post('/quiz/complete', validateQuizCreation, authMiddleware, authorize(['admin']), quizController.createCompleteQuiz);
router.post('/quiz', validateQuizCreation, authMiddleware, authorize(['admin']), quizController.createQuiz);
router.get('/quiz', quizController.getAllQuizzes);
router.get('/quiz/:id', quizController.getQuizById);
router.get('/quiz/theme', quizController.getQuizByTheme);

router.post('/questions', validateQuestionCreation, authMiddleware, authorize(['admin']), quizController.createQuestion);
router.get('/questions/quiz/:id', quizController.getQuestionsByQuizId);
router.delete('/questions/:id', authMiddleware, authorize(['admin']), quizController.deleteQuestion);

router.post('/answers', validateAnswerCreation, authMiddleware, authorize(['admin']), quizController.createAnswer);
router.get('/answers/question/:id', quizController.getAnswersByQuestionId);
router.delete('/answers/:id', authMiddleware, authorize(['admin']), quizController.deleteAnswer);
router.delete('/quiz/:id', authMiddleware, authorize(['admin']), quizController.deleteQuiz);

export default router;
