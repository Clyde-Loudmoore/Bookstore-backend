import express from "express";

import bookControllers from "../controllers/bookControllers";

const routes = express.Router();

routes.get('/genres', bookControllers.getBookGenres);
routes.get('/all-books', bookControllers.getAllBooks);
routes.get('/:bookId', bookControllers.getBook);

export default routes;