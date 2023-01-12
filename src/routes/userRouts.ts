import express from 'express';

import createValidationMiddleware from '../middlewares/validationMiddleware';
import user from '../validationSchemes/user';
import userControllers from '../controllers/userControllers';
import verifyAuthorization from '../middlewares/verifyToken';

const routes = express.Router();

routes.use(verifyAuthorization);

routes.patch('/:userId', createValidationMiddleware(user.patchUser), userControllers.patchUser);

routes.patch('/:userId/password', createValidationMiddleware(user.patchUserPass), userControllers.patchUserPass);

routes.delete('/:userId', createValidationMiddleware(user.deleteUser), userControllers.deleteUser);

export default routes;
