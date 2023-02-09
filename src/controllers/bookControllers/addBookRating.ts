import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import db from '../../db';
import errorsMessages from '../../utils/errorsMessages';
import CustomError from '../../utils/customErrors';
import BookRating from '../../db/entities/BookRating';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { bookRating: BookRating };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;


export const addBookRating: HandlerType = async (req, res, next) => {
  try {
    const { bookId, userId, rating } = req.body;

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

    return res.status(StatusCodes.OK);
  } catch (err) {
    next(err);
  }
};
