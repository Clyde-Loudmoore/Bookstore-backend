/* eslint-disable @typescript-eslint/comma-dangle */
import { clear } from 'console';
import express from 'express';

import authController from '../controllers/authControllers';
import createValidationMiddleware from '../middlewares/validationMiddleware';
import user from '../validationSchemes/user';

const routes = express.Router();

routes.get('/me', authController.getUser);

routes.post('/register', createValidationMiddleware(user.registration), authController.register);
routes.post('/login', createValidationMiddleware(user.login), authController.login);

export default routes;
