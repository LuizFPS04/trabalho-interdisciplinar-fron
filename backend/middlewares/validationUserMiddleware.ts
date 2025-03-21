import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateCreateUser: any = [
  body('name').notEmpty().withMessage('Nome é obrigatório.'),
  body('email').isEmail().withMessage('E-mail inválido.'),
  body('role').optional().isIn(['admin', 'normal']).withMessage('Role deve ser "admin" ou "normal".'),
  
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];
