import express from 'express';

import userRoutes from './userRouts';
import authRoutes from './authRouts';

const routes = express.Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);

export default routes;
