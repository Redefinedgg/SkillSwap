import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './users-repository.interface';
import { Prisma, User } from '@prisma/client';
import { UsersQueryDto } from './dto/users-query.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({ where });
  }

  async getUsers(params: UsersQueryDto): Promise<User[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.user.findMany({ skip, take, where, orderBy });
  }

  async createUser(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({ data });
  }
}
