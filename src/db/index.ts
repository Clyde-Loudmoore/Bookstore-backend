import dataSource from './dataSource';
import User from './entities/User';
import Book from './entities/Book';
import Genre from './entities/Genre';

export default {
  user: dataSource.getRepository(User),
  book: dataSource.getRepository(Book),
  genre: dataSource.getRepository(Genre),
};
