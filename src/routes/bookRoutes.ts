import express from "express";

import bookControllers from "../controllers/bookControllers";

const routes = express.Router();

routes.get('/genres', bookControllers.getBookGenres);
routes.get('/all-books', bookControllers.getAllBooks);
routes.get('/filtred-books', bookControllers.getFiltredBooks);
routes.get('/rating/:userId/:bookId', bookControllers.getBookRating);
routes.get('/:bookId', bookControllers.getBook);

routes.post('/add', bookControllers.addBookRating);

export default routes;