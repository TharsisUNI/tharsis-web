import { Router } from "express";
import { sendMailController } from './mailControllers';
import { mailMiddleware } from './mailMiddlewares';

const router: Router = Router();

router.post('/sendmail', mailMiddleware, sendMailController);

export default router;
