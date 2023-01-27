import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import db from '../../db';
import Genre from '../../db/entities/Genre';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { genres: Genre[] };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const getBookGenres: HandlerType = async (_req, res, next) => {
  try {
    const genres = await db.genre.find();    
    res.status(StatusCodes.OK).json({ genres });
  } catch (err) {    
    next(err);
  }
};