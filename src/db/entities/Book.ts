import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  avatar: string;


  @Column({ type: 'varchar', nullable: true })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  author: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'float', nullable: false })
  rating: number;

  @Column({ type: 'boolean', nullable: false })
  paperback: boolean;

  @Column({ type: 'boolean', nullable: false })
  hardcover: boolean;

  @Column({ type: 'varchar', nullable: false })
  comments: string;

}

export default Book;