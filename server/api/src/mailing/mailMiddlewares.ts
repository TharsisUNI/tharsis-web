import { NextFunction, Request, Response } from "express";
import { ApplicationError } from '../config/ApplicationError';
import { cryptoManager } from '../utils/cryptoManager';

export const mailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (cryptoManager.validateText(`${process.env.ENCRYPT_SECRET}`, req.headers.authorization!)) {
      next();
    } else {
      throw new Error('usuario no autorizado');
    }
  } catch (error: any) {
    next(new ApplicationError(400, `${error.message}`));
  }
}