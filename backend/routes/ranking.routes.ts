import { Router } from 'express';
import * as rankingController from '../controllers/ranking.controller';

const router = Router();

router.post('/ranking', rankingController.createRanking);
router.get('/ranking', rankingController.getAllRankings);
router.get('/ranking/:id', rankingController.getRankingById);
router.get('/ranking/quiz/:id', rankingController.getRankingsByQuizId);
router.get('/ranking/user/:id', rankingController.getRankingsByUserId);
router.get('/ranking/complete/:id', rankingController.getRankingsWithUserAndQuiz);
router.put('/ranking/:id', rankingController.updateRanking);
router.delete('/ranking/:id', rankingController.deleteRanking);

export default router;