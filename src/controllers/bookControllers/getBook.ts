import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import db from '../../db';
import Book from '../../db/entities/Book';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { book: Book };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>

export const getBook: HandlerType = async (req, res, next) => {
  try {

    const book = await db.book.findOne({where: { id: req.params.bookId }});
    
    res.status(StatusCodes.OK).json({ book });

  } catch (err) {
    next(err);
  }
};