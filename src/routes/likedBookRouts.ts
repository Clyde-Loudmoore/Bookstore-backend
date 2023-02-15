import express from "express";

import likedBooksControllers from "../controllers/likedBooksControllers";
import verifyAuthorization from "../middlewares/verifyToken";

const routes = express.Router();

routes.use(verifyAuthorization);

routes.get('/:userId', likedBooksControllers.getLikedBooks);

routes.post('/add/:bookId', likedBooksControllers.addLikedBook);

routes.delete('/delete/:bookId', likedBooksControllers.deleteLikedBook);

export default routes;