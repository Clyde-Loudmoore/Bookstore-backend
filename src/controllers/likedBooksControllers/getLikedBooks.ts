import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import LikedBook from '../../db/entities/LikedBook';
import db from '../../db';
import CustomError from '../../utils/customErrors';
import errorsMessages from '../../utils/errorsMessages';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { books: LikedBook[] };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const getLikedBooks: HandlerType = async (req, res, next) => {
  try {
    const userId = req.query.userId;

    if (!userId) {
      throw new CustomError(
        StatusCodes.NOT_FOUND,
        errorsMessages.USER_NOT_FOUND,
      );
    }

    const likedBooks = await db.likedBook
      .createQueryBuilder('likedBooks')
      .where('likedBooks.userId = :userId', { userId })
      .leftJoinAndSelect('likedBooks.book', 'book')
      .getMany();

    return res.json({ books: likedBooks });
  } catch (err) {
    next(err);
  }
};
