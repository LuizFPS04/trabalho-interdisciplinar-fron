import { Request, Response, NextFunction } from 'express';

export function authorize(roles: string[]): any {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user;

        if (!user) {
            return res.status(401).json({ message: 'Usuário não autenticado.' });
        }

        if (!user.role || !roles.includes(user.role)) {
            return res.status(403).json({
                message: `Acesso negado. Permissões necessárias: ${roles.join(', ')}`
            });
        }

        next();
    };
}
