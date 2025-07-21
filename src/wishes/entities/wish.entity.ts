import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import {
  IsDecimal,
  IsNumber,
  IsString,
  IsUrl,
  Length,
  Min,
} from 'class-validator';
import { Offer } from 'src/offers/entities/offer.entity';
import { Wishlist } from 'src/wishlists/entities/wishlist.entity';
import { Base } from 'src/common/entity';

@Entity('wish')
export class Wish extends Base {
  @Column()
  @IsString()
  @Length(1, 250)
  name: string;

  @Column()
  @IsUrl()
  link: string;

  @Column()
  @IsUrl()
  image: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  @IsDecimal()
  @Min(0)
  price: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  @IsDecimal()
  @Min(0)
  raised: number;

  @Column()
  @IsString()
  @Length(1, 1024)
  description: string;

  @Column({
    type: 'int',
    default: 0,
  })
  @IsNumber()
  copied: number;

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @OneToMany(() => Offer, (offers) => offers.item)
  offers: Offer[];

  @ManyToMany(() => Wishlist, (wishlists) => wishlists.items)
  wishlists: Wishlist[];
}
