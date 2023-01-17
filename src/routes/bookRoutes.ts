import express from "express";

import bookControllers from "../controllers/bookControllers";

const routes = express.Router();

routes.get('/all-books', bookControllers.getBooks);

export default routes;