
import {Router} from 'express';
import {methods as authController} from './auth.controller';

const router = Router();

router.post("/api/auth/login",authController.login);


export default router;