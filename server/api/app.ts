import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import mailRoutes from './src/mailing/mailRoutes';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use(mailRoutes);

app.use(function (error: any, req: Request, res: Response, next: NextFunction) {
  res.status(error.status || 500).send({ message: error.message, type: error.type });
  next();
});

export default app;
