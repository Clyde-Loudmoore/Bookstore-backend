import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Book from './Book';
import User from './User';

@Entity()
class BookRating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  bookId: number;

  @Column({ type: 'varchar', nullable: false })
  userId: number;

  @Column({ type: 'varchar', nullable: false })
  rating: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Book, (book) => book.id)
  @JoinColumn({ name: 'bookId' })
  book: Book;
}

export default BookRating;