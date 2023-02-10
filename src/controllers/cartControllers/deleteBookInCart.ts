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

export const deleteBookInCart: HandlerType = async (req, res, next) => {
  try {
    const cartId = Number(req.params.cartId);

    if (!cartId) {
      throw new CustomError(
        StatusCodes.NOT_FOUND,
        errorsMessages.FILE_NOT_FOUND,
      );
    }

    const selectBook = await db.cart
      .createQueryBuilder('cart')
      .where('cart.id = :cartId', { cartId })
      .getOne();

    await db.cart.remove(selectBook);

    const userCart = await db.cart
      .createQueryBuilder('cart')
      .where('cart.userId = :userId', { userId: req.user.id })
      .leftJoinAndSelect('cart.book', 'book')
      .getMany();

    res.status(StatusCodes.OK).json({ books: userCart });
  } catch (err) {
    next(err);
  }
};
