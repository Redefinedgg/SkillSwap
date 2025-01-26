// import { CreateUserDto } from 'src/users/dto/create-user.dto';
// import { UsersRepository } from '../../users-repository.interface';
// import { Prisma, User } from '@prisma/client';

// export class MockUsersRepository implements UsersRepository {
//   private users: Partial<User>[] = [
//     { id: 1, email: 'test1@example.com' },
//     { id: 2, email: 'test2@example.com' },
//   ];

//   async getUser(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
//     return this.users.find(user => user.id === where.id) as User || null;
//   }

//   async getUsers(): Promise<User[]> {
//     return this.users as User[];
//   }

//   async createUser(data: CreateUserDto): Promise<User> {
//     const user = { id: this.users.length + 1, ...data }
//     this.users.push(user);
//     return user as User;
//   }
// }
