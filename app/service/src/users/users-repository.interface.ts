import { Prisma, User } from "@prisma/client";
import { UsersQueryDto } from "./dto/users-query.dto";
import { CreateUserDto } from "./dto/create-user.dto";

export interface UsersRepository {
  getUser(where: Prisma.UserWhereUniqueInput): Promise<User | null>;
  getUsers(params: UsersQueryDto): Promise<User[]>;
  createUser(data: CreateUserDto): Promise<User>;
}
