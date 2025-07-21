import { IsBoolean, IsDecimal } from 'class-validator';
import { Base } from 'src/common/entity';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('offer')
export class Offer extends Base {
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
  user: User;

  @ManyToOne(() => Wish, (wish) => wish.offers)
  item: Wish;
}
