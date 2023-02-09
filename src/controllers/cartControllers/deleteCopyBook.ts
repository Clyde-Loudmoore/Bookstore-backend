import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import CustomError from '../../utils/customErrors';
import Cart from '../../db/entities/Cart';
import errorsMessages from '../../utils/errorsMessages';

import db from '../../db';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { userCart: Cart[] };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const deleteCopyBook: HandlerType = async (req, res, next) => {
  try {
    const bookId = req.params.bookId;

    if (!bookId) {
      throw new CustomError(
        StatusCodes.NOT_FOUND,
        errorsMessages.FILE_NOT_FOUND,
      );
    }

    const cart = await db.cart
      .createQueryBuilder('cart')
      .where('cart.bookId = :bookId', { bookId })
      .getOne();

    const num = cart.quantityOfGoods;
    cart.quantityOfGoods = +num - 1;

    if (cart.quantityOfGoods === 0) {
      await db.cart.remove(cart);
    } else {
      await db.cart.save(cart);
    }

    const userCart = await db.cart
      .createQueryBuilder('cart')
      .where('cart.userId = :userId', { userId: req.user.id })
      .leftJoinAndSelect('cart.book', 'book')
      .getMany();

    res.status(StatusCodes.OK).json({ userCart });
  } catch (err) {
    next(err);
  }
};
