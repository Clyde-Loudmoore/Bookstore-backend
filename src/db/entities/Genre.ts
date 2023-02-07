import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';

@Entity()
class Genre {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  genreName: string;
}

export default Genre;