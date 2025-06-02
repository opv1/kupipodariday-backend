import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { OffersModule } from './offers/offers.module';
import { WishlistlistsModule } from './wishlistlists/wishlistlists.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    WishesModule,
    OffersModule,
    WishlistlistsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
