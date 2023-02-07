import dataSource from './dataSource';
import User from './entities/User';
import UserComment from './entities/UserComment';
import Book from './entities/Book';
import BookRating from './entities/BookRating';
import LikedBook from './entities/LikedBook';
import Genre from './entities/Genre';
import Cart from './entities/Cart';

export default {
  user: dataSource.getRepository(User),
  userComments: dataSource.getRepository(UserComment),
  book: dataSource.getRepository(Book),
  bookRating: dataSource.getRepository(BookRating),
  likedBook: dataSource.getRepository(LikedBook),
  genre: dataSource.getRepository(Genre),
  cart: dataSource.getRepository(Cart),
};
