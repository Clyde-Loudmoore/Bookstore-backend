import express from 'express';

import userRoutes from './userRouts';
import authRoutes from './authRouts';
import bookRoutes from './bookRouts';
import cartRoutes from './cartRouts';

const routes = express.Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/books', bookRoutes);
routes.use('/cart', cartRoutes);

export default routes;
