/* eslint-disable @typescript-eslint/comma-dangle */
import express from 'express';

import authController from '../controllers/authControllers';
import createValidationMiddleware from '../middlewares/validationMiddleware';
import user from '../validationSchemes/user';

const routes = express.Router();

routes.get('/me', authController.getUser);

routes.post('/sing-up', createValidationMiddleware(user.singUp), authController.singUp);
routes.post('/sing-in', createValidationMiddleware(user.singIn), authController.singIn);

export default routes;
