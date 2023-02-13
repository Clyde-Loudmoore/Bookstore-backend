import type { RequestHandler } from 'express';

import LikedBook from '../../db/entities/LikedBook';
import db from '../../db';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { books: LikedBook[] };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const addLikedBook: HandlerType = async (req, res, next) => {
  try {
    const { bookId } = req.params;

    const likedBook = new LikedBook();
    likedBook.bookId = bookId;
    likedBook.userId = req.user.id;

    await db.likedBook.save(likedBook);

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
