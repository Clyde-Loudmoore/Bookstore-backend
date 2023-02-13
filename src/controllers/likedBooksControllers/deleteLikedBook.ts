import type { RequestHandler } from 'express';

import LikedBook from '../../db/entities/LikedBook';
import db from '../../db';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { books: LikedBook[] };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const deleteLikedBook: HandlerType = async (req, res, next) => {
  try {
    const { bookId } = req.params;

    const unLiked = await db.likedBook
      .createQueryBuilder('likedBook')
      .where('likedBook.bookId = :bookId', { bookId })
      .getOne();

    await db.likedBook.remove(unLiked);

    const likedBooks = await db.likedBook
      .createQueryBuilder('likedBooks')
      .where('likedBooks.userId = :userId', { userId: req.user.id })
      .leftJoinAndSelect('likedBooks.book', 'book')
      .getMany();

    return res.json({ books: likedBooks });
  } catch (err) {
    next(err);
  }
};
