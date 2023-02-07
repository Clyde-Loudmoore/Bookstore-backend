import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterLoad,
  ManyToMany,
  OneToMany,
  JoinTable
} from 'typeorm';

import Genre from './Genre';
import UserComment from './UserComment';
import { addUrlBookCover } from '../../utils/addUrl';

@Entity()
class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  bookCover: string;

  @Column({ type: 'varchar', nullable: true })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  author: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  rating: string;

  @Column({ type: 'varchar', nullable: false })
  binding: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @Column({ type: 'date', nullable: false })
  dateOfIssue: string;

  @ManyToMany(() => Genre)
  @JoinTable()
  genre: Genre[];

  @AfterLoad()
  setUrlBookCover?() {
    this.bookCover = addUrlBookCover(this.bookCover);
  }

  @OneToMany(() => UserComment, (comment) => comment.book)
  comments: UserComment[];

}

export default Book;