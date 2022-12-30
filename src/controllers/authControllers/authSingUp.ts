/* eslint-disable no-console */
import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../../db/entities/User';
import db from '../../db';
import generateToken from '../../utils/generateToken';
import hashedPassword from '../../utils/hashedPassword';
import errorsMessage from '../../utils/errorsMessages';
import CustomError from '../../utils/customErrors';

type ParamsType = Record<string, never>;
type BodyType = User;
type QueryType = Record<string, never>;
type ResponseType = { message?: string; user?: User; token?: string };

type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const singUp: HandlerType = async (req, res, next) => {
  try {
    const exitingUser = await db.user.findOne({ where: { email: req.body.email } });
    
    if (exitingUser) {
      throw new CustomError(StatusCodes.BAD_REQUEST, errorsMessage.EMAIL_USED);
    }
    
    const hashPassword = await hashedPassword.hashedPass(req.body.password);
    
    const user = new User();
    user.email = req.body.email;
    user.password = hashPassword;
    
    await db.user.save(user);
    delete user.password;
    
    const token = generateToken.generateAccessToken(user.id);

    res.status(StatusCodes.CREATED)
      .json({ user, token });
    } catch (err) {
      next(err);
  }
};
