import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import db from '../../db';
import errorsMessages from '../../utils/errorsMessages';
import CustomError from '../../utils/customErrors';
import BookRating from '../../db/entities/BookRating';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { rating: number };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

const changeBookRating = async (bookId: number) => {
  const bookRating = await db.bookRating
    .createQueryBuilder('rating')
    .where('rating.bookId = :bookId', { bookId })
    .getMany();

  let mathRating = 0;

  bookRating.forEach((book) => {
    mathRating += Number(book.rating);
  });

  return Number((mathRating / bookRating.length).toFixed(1));
};

export const addBookRating: HandlerType = async (req, res, next) => {
  try {
    const { bookId, userId, rating } = req.body;

    const book = await db.book.findOneBy({ id: bookId });
    if (!book) {
      throw new CustomError(StatusCodes.NOT_FOUND, errorsMessages.FILE_NOT_FOUND);
    }

    const selectBookRating = await db.bookRating
      .createQueryBuilder('rating')
      .where('rating.userId = :userId AND rating.bookId = :bookId', {
        userId,
        bookId,
      })
      .getOne();

    if (selectBookRating) {
      selectBookRating.rating = rating;

      await db.bookRating.save(selectBookRating);

      const result = await changeBookRating(bookId);

      book.rating = String(result);

      await db.book.save(book);

      return res.json(selectBookRating);
    }

    const bookRating = new BookRating();

    bookRating.bookId = bookId;
    bookRating.userId = userId;
    bookRating.rating = rating;

    if (!bookRating) {
      throw new CustomError(
        StatusCodes.NOT_IMPLEMENTED,
        errorsMessages.INVALID_CREDENTIALS,
      );
    }

    await db.bookRating.save(bookRating);

    const result = await changeBookRating(bookId);

    book.rating = String(result);

    await db.book.save(book)

    return res.json(bookRating);
  } catch (err) {
    next(err);
  }
};
