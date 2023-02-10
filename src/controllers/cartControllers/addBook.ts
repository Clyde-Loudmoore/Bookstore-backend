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

export const addBook: HandlerType = async (req, res, next) => {
  try {
    const { userId, bookId } = req.body;

    const book = await db.book.findOneBy({ id: bookId });
    const user = await db.user.findOneBy({ id: userId });

    if (!book) {
      throw new CustomError(
        StatusCodes.NOT_FOUND,
        errorsMessages.FILE_NOT_FOUND,
      );
    }

    if (!user) {
      throw new CustomError(
        StatusCodes.NOT_FOUND,
        errorsMessages.USER_NOT_FOUND,
      );
    }

    const cart = new Cart();
    cart.book = book;
    cart.user = user;
    cart.author = book.author;
    cart.title = book.title;
    cart.cover = book.bookCover;
    cart.price = String(book.price);
    cart.quantityOfGoods = 1;

    await db.cart.save(cart);

    const userCart = await db.cart
      .createQueryBuilder('cart')
      .where('cart.userId = :userId', { userId })
      .leftJoinAndSelect('cart.book', 'book')
      .getMany();

    return res.status(StatusCodes.OK).json({ books: userCart });
  } catch (err) {
    next(err);
  }
};
