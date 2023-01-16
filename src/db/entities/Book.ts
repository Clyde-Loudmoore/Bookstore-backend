import { Entity, PrimaryGeneratedColumn, Column, AfterLoad } from 'typeorm';

import { addUrlBookCover } from '../../utils/addUrl';

@Entity()
class Book {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', nullable: true })
  bookCover: string;

  @Column({ type: 'varchar', nullable: true })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  author: string;

  @Column({ type: 'varchar', nullable: false })
  genre: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'float', nullable: true })
  rating?: number;

  @Column({ type: 'varchar', nullable: false })
  binding: string;

  @Column({ type: 'varchar', nullable: true })
  comments?: string;

  @AfterLoad()
  setUrlBookCover?() {
    this.bookCover = addUrlBookCover(this.bookCover);
  }

}

export default Book;