import type { RequestHandler } from 'express';
import { Buffer } from 'buffer';
import * as fs from 'fs';
import { StatusCodes } from 'http-status-codes';
import { v4 } from 'uuid';

import db from '../../db';
import User from '../../db/entities/User';
import errorsMessages from '../../utils/errorsMessages';
import CustomError from '../../utils/customErrors';
import successMessages from '../../utils/successMessages';
import config from '../../config';

type ParamsType = Record<string, never>;
type QueryType = Record<string, never>;
type ResponseType = {
  message: string;
  updatedUser?: User;
};
type BodyType = {
  avatar: string;
};

type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const postAvatar: HandlerType = async (req, res, next) => {
  try {
    const avatarData = req.body.avatar;
    const [data, base64] = avatarData.split(',');
    const avatarName = `photo_${v4()}`;
    const avatarFormat = data.slice(data.indexOf('/') + 1, data.indexOf(';'));
    const avatarBuffer = Buffer.from(base64, 'base64');
    const path = config.path;

    if (avatarName) {
      fs.unlink(`${path}/avatars/${avatarName}.${avatarFormat}`, (err) => {
        if (err) {
          console.log(err);
        }
      })
    }

    fs.writeFile(`${path}/avatars/${avatarName}.${avatarFormat}`, avatarBuffer, (err) => {
      if (err) {
        throw new CustomError(StatusCodes.BAD_REQUEST, errorsMessages.LOADING_ERROR)
      }
    });

    const user = await db.user.createQueryBuilder('user').where('user.id = :id', { id: req.user.id }).getOne();;
    user.avatar = `${avatarName}.${avatarFormat}`;

    await db.user.save(user);

    res.status(StatusCodes.OK)
      .json({ message: successMessages.UPDATE_FILE, updatedUser: user });
  } catch (err) {
    next(err);
  }
};
