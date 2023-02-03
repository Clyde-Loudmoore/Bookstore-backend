import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import db from '../../db';
import type Book from '../../db/entities/Book';

type ParamsType = Record<string, never>;

type ResponseType = {
  books: Book[];
  // counter: number;
  // numberPerPage: number;
};

type BodyType = Record<string, never>;

type QueryType = {
  genre?: string;
  minPrice?: string;
  maxPrice?: string;
  sorting?: string;
  page?: string;
  search?: string;
};

type HandlerType = RequestHandler<ParamsType, ResponseType, BodyType, QueryType>;

export const getFiltredBooks: HandlerType = async (req, res, next) => {
  try {    
    const { genre, search, sorting } = req.query;
    // const page = Number(req.query.page);
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    // const numberPerPage = 10;
    // let sortBy: string;
    
    // if (sorting === 'price') {
    //   sortBy = 'price';
    // } else if (sorting === 'name') {
    //   sortBy = 'title';
    // } else if (sorting === 'author') {
    //   sortBy = 'author';
    // } else if (sorting === 'date of issue') {
    //   sortBy = 'dateOfIssue';
    // } else {
    //   sortBy = sorting;
    // };

    const filterBooks = db.book.createQueryBuilder('book')
    .where('book.price BETWEEN :minPrice AND :maxPrice', { minPrice, maxPrice })
    //   .orderBy(`book.${sortBy}`, 'ASC');
      
      if (genre.length) {
        const genreArr = genre.split(',');
        filterBooks.innerJoinAndSelect('book.genre', 'genre', 'genre.genreName IN (:...genreArr)', { genreArr });
      }
      
      // if (search) {
      //   filterBooks.andWhere('book.title ILIKE :search OR book.author ILIKE :search', { search: `%${search}%` });
      // }
      
    // const counter = (await filterBooks.getMany()).length;
    const books = await filterBooks
    // .take(numberPerPage)
    // .skip((page - 1) * numberPerPage)
    .getMany();
    
    return res.status(StatusCodes.OK).json({ books });
  } catch (err) {
    next(err);
  }
};
