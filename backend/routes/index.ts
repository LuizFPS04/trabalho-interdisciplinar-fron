import express from "express";
import quizRouter from './quiz.routes';
import userRouter from './user.routes';
import resultRouter from './result.routes';
import rankingRouter from './ranking.routes';

const router = express.Router();

router.use("/v1", quizRouter);
router.use("/v1", userRouter);
router.use("/v1", resultRouter);
router.use("/v1", rankingRouter);

export default router;