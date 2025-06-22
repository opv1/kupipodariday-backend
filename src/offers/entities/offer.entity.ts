import { IsBoolean, IsDecimal } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({
    type: 'decimal',
    scale: 2,
    precision: 10,
  })
  @IsDecimal()
  amount: number;

  @Column({
    default: false,
  })
  @IsBoolean()
  hidden: boolean;

  @ManyToOne(() => User, (user) => user.offers)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Wish, (wish) => wish.offers)
  @JoinColumn({ name: 'itemId' })
  item: Wish;
}
