import { Router } from 'express';
import * as resultController from '../controllers/result.controller';

const router = Router();

router.post('/result', resultController.createResult);
router.get('/result', resultController.getAllResults);
router.get('/result/:id', resultController.getResultById);
router.get('/result/quiz/:id', resultController.getResultsByQuizId);
router.get('/result/user/:id', resultController.getResultsByUserId);
router.get('/result/user/quiz', resultController.getResultsWithUserAndQuiz);
router.put('/result/:id', resultController.updateResult);
router.delete('/result/:id', resultController.deleteResult);

export default router;