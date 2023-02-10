import express from "express";

import cartControllers from "../controllers/cartControllers";
import verifyAuthorization from "../middlewares/verifyToken";

const routes = express.Router();

routes.use(verifyAuthorization);

routes.post('/add', cartControllers.addBook);
routes.get('/:userId', cartControllers.getBooksInCart);
routes.delete('/delete/:cartId', cartControllers.deleteBookInCart);
routes.get('/copy/:bookId', cartControllers.addCopyBook);
routes.delete('/delete-copy/:bookId', cartControllers.deleteCopyBook);

export default routes;