import { Entity, PrimaryGeneratedColumn, Column, AfterLoad, ManyToMany, JoinTable } from 'typeorm';

import Genre from './Genre';
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

  @Column({ type: 'varchar', nullable: false })
  binding: string;

  @Column({ type: 'varchar', nullable: true })
  comments?: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @ManyToMany(() => Genre)
  @JoinTable()
  genre: Genre[];

  @AfterLoad()
  setUrlBookCover?() {
    this.bookCover = addUrlBookCover(this.bookCover);
  }

}

export default Book;