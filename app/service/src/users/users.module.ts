import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaUsersRepository } from './prisma-users-repository';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  UsersService,
  UserValidationService,
} from './services';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    UsersService,
    UserValidationService,
    {
      provide: 'UsersRepository',
      useClass: PrismaUsersRepository,
    },
  ],
  exports: ['UsersRepository', UsersService],
})
export class UsersModule {}
