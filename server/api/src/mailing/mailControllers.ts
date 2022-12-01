import { NextFunction, Request, Response } from "express";
import { ApplicationError } from '../config/ApplicationError';
import { sendMailService } from './mailServices';

export const sendMailController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const messageId = await sendMailService(req.body.email);
    res.status(201).send({ success: true, messageId });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}
