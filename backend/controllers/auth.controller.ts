import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    const token = await authService.authenticateUser(email, password);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600 * 24000,
      sameSite: 'strict', 
    });

    res.json({ message: 'Login bem-sucedido' });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
}


export function logout(req: Request, res: Response): void {
  res.clearCookie('token');
  res.json({ message: 'Logout bem-sucedido' });
}
