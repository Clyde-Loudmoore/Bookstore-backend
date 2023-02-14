import express from 'express';

import commentsControllers from '../controllers/commentsControllers';
import verifyAuthorization from "../middlewares/verifyToken";

const commentsRouter = express.Router();

commentsRouter.get('/comments/:bookId', commentsControllers.getComments);

commentsRouter.post('/add', verifyAuthorization, commentsControllers.addComment);

export default commentsRouter;