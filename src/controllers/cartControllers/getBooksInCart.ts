import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import CustomError from '../../utils/customErrors';
import Cart from '../../db/entities/Cart';
import errorsMessages from '../../utils/errorsMessages';

import db from '../../db';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { books: Cart[] };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const getBooksInCart: HandlerType = async (req, res, next,) => {
  try {
    const userId = req.query.userId;

    if (!userId) {
      throw new CustomError(
        StatusCodes.NOT_FOUND,
        errorsMessages.USER_NOT_FOUND,
      );
    }

    const userCart = await db.cart
      .createQueryBuilder('cart')
      .where('cart.userId = :userId', { userId })
      .leftJoinAndSelect('cart.book', 'book')
      .getMany();

    return res.json({ books: userCart });
  } catch (err) {
    next(err);
  }
};
