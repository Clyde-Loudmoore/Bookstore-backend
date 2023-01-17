import express from 'express';

import userRoutes from './userRouts';
import authRoutes from './authRouts';
import bookRoutes from './bookRoutes';

const routes = express.Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/books', bookRoutes);

export default routes;
