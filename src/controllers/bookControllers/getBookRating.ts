import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import BookRating from '../../db/entities/BookRating';
import db from '../../db';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { bookRating: BookRating };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const getBookRating: HandlerType = async (req, res, next) => {
  try {
    const { bookId, userId } = req.params;

    const bookRating = await db.bookRating
      .createQueryBuilder('rating')
      .where('rating.bookId = :bookId', { bookId })
      .andWhere('rating.userId = :userId', { userId })
      .getOne();

    if (!bookRating) {
      return res.status(StatusCodes.NO_CONTENT);
    }

    return res.json({ bookRating });
  } catch (err) {
    next(err);
  }
};
