import { Request, Response } from 'express';
import { Httpexception } from '../interfaces/Httpexceptions';

export function errorMiddleware (err: Httpexception, req: Request, res: Response) {
  const status: number = err.status ?? 500;
  const message: string = err.message ?? 'Internal Server Error';

  res.status(status).json({
    status,
    message
  });
}