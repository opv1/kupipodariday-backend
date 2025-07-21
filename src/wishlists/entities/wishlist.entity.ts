import { IsString, IsUrl, Length } from 'class-validator';
import { Base } from 'src/common/entity';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity('wishlist')
export class Wishlist extends Base {
  @Column()
  @IsString()
  @Length(1, 250)
  name: string;

  @Column({
    nullable: true,
  })
  @IsString()
  @Length(0, 1500)
  description: string;

  @Column()
  @IsUrl()
  image: string;

  @ManyToMany(() => Wish, (wishes) => wishes.wishlists)
  @JoinTable()
  items: Wish[];

  @ManyToOne(() => User, (users) => users.wishlists)
  owner: User;
}
