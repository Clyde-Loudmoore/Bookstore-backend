import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import db from '../../db';
import Book from '../../db/entities/Book';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { books: Book[] };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const getBooks: HandlerType = async (_req, res, next) => {
  try {
    const books = await db.book.find();
    res.status(StatusCodes.OK).json({ books });
  } catch (err) {
    next(err);
  }
};