import dataSource from './dataSource';
import User from './entities/User';
import Book from './entities/Book';

export default {
  user: dataSource.getRepository(User),
  book: dataSource.getRepository(Book),
};
