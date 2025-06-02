import { Module } from '@nestjs/common';
import { WishlistlistsService } from './wishlistlists.service';
import { WishlistlistsController } from './wishlistlists.controller';

@Module({
  providers: [WishlistlistsService],
  controllers: [WishlistlistsController]
})
export class WishlistlistsModule {}
