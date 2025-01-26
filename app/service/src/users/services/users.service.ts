import { Inject, Injectable } from '@nestjs/common';
import { UsersRepository } from '../users-repository.interface';
import { Prisma, User } from '@prisma/client';
import { CreateUserWithConfirmPasswordDto, CreateUserDto, UsersQueryDto } from '../dto';
import { UserValidationService } from './user-validation.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
    private readonly userValidationService: UserValidationService,
  ) {}

  async getUser(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.usersRepository.getUser(where);
  }

  async getUsers(params: UsersQueryDto): Promise<User[]> {
    return this.usersRepository.getUsers(params);
  }

  async createUser(data: CreateUserWithConfirmPasswordDto): Promise<User> {

    this.userValidationService.passwordConfirmed(data.password, data.confirmPassword);
    this.userValidationService.doesUserExistByEmail(data.email);

    const { email, fullName, username, password } = data;
    
    return this.usersRepository.createUser({
      email,
      fullName,
      username,
      password,
    });
  }
}
