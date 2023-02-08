import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import db from '../../db';
import type Book from '../../db/entities/Book';

type ParamsType = Record<string, never>;

type ResponseType = {
  books: Book[];
  maxPages: number;
};

type BodyType = Record<string, never>;

type QueryType = {
  genre: string;
  minPrice: string;
  maxPrice: string;
  sorting: string;
  page: string;
  search: string;
};

type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const getFiltredBooks: HandlerType = async (req, res, next) => {
  try {
    const { genre, search, sorting } = req.query;
    const page = Number(req.query.page);
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const numberPerPage = 12;
    let sortBy: string;

    if (sorting === 'Price') {
      sortBy = 'price';
    } else if (sorting === 'Name') {
      sortBy = 'title';
    } else if (sorting === 'Author') {
      sortBy = 'author';
    } else if (sorting === 'Date of issue') {
      sortBy = 'dateOfIssue';
    } else {
      sortBy = sorting;
    };

    const filterBooks = db.book.createQueryBuilder('book')
      .where('book.price BETWEEN :minPrice AND :maxPrice', { minPrice, maxPrice })
      .orderBy(`book.${sortBy}`, 'ASC')
      .take(numberPerPage)
      .skip((page - 1) * numberPerPage);

    if (genre.length) {
      const genreArr = genre.split(',');
      filterBooks.innerJoinAndSelect('book.genre', 'genre', 'genre.genreName IN (:...genreArr)', { genreArr });
    }

    if (search) {
      filterBooks.andWhere('book.title ILIKE :search OR book.author ILIKE :search', { search: `%${search}%` });
    }

    const [books, count] = await filterBooks.getManyAndCount();

    let maxPages = Math.ceil(count / books.length);
    if (maxPages > 3) {
      maxPages = 3;
    }
    


    return res.status(StatusCodes.OK).json({ books, maxPages });
  } catch (err) {
    next(err);
  }
};
