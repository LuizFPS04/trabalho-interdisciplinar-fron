import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import * as authController from '../controllers/auth.controller';

import { validateCreateUser } from '../middlewares/validationUserMiddleware';
import { authMiddleware } from '../middlewares/authMiddleware';
import { authorize } from '../middlewares/authorizationMiddleware';

const router = Router();

router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.post('/user', validateCreateUser, userController.createUser);
router.get('/user', authMiddleware, authorize(['admin']), userController.getAllUsers);
router.get('/user/:id', authMiddleware, userController.getUserById);
router.get('/user/details', authMiddleware, userController.getUserWithDetails);
router.put('/user', authMiddleware, authorize(['admin', 'normal']), userController.updateUser);
router.delete('/user', authMiddleware, authorize(['admin']), userController.deleteUser);

export default router;
