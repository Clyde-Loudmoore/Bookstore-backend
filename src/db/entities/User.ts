import { Entity, PrimaryGeneratedColumn, Column, AfterLoad } from 'typeorm';
import { addUrlAvatar } from '../../utils/addUrl';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  avatar: string;


  @Column({ type: 'varchar', nullable: true })
  fullName: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false, select: false })
  password: string;

  @AfterLoad()
  setUrlAvatar() {
    this.avatar = addUrlAvatar(this.avatar);
  }
}

export default User;
