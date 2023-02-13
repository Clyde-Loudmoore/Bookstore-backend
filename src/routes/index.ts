import express from 'express';

import userRoutes from './userRouts';
import authRoutes from './authRouts';
import bookRoutes from './bookRouts';
import cartRoutes from './cartRouts';
import likedBookRoutes from './likedBookRouts'

const routes = express.Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/books', bookRoutes);
routes.use('/cart', cartRoutes);
routes.use('/liked', likedBookRoutes);

export default routes;
