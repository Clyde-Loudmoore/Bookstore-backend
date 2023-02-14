import type { RequestHandler } from 'express';

import UserComment from '../../db/entities/UserComment';
import db from '../../db';

type BodyType = Record<string, never>;
type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = { comments: UserComment[] };
type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;


export const getComments: HandlerType = async (req, res, next) => {
  try {
    const { bookId } = req.params;

    const userComment = await db.userComments
      .createQueryBuilder('comment')
      .where('comment.bookId = :bookId', { bookId })
      .orderBy('comment.createdTime','ASC')
      .leftJoinAndSelect('comment.user', 'user')
      .getMany();

    return res.json({ comments: userComment });
  } catch (err) {
    next(err);
  }
};
