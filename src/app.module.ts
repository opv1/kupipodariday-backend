import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { OffersModule } from './offers/offers.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import environment from './config';
import { DatabaseConfigFactory } from './config/database';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [environment], isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: DatabaseConfigFactory }),
    AuthModule,
    OffersModule,
    UsersModule,
    WishesModule,
    WishlistsModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
