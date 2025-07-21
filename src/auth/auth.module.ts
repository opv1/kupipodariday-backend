import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.stategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { HashModule } from 'src/hash/hash.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigFactory } from 'src/config/jwt';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    HashModule,
    JwtModule.registerAsync({ useClass: JwtConfigFactory }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
