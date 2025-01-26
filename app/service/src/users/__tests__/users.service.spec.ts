import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { UsersRepository } from '../users-repository.interface';
import { MockUsersRepository } from './mocks/mock-users-repository';
import { Prisma, User } from '@prisma/client';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: 'UsersRepository', useClass: MockUsersRepository },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user by ID', async () => {
    const user: User | null = await service.getUser({ id: 1 });
    expect(user).toBeDefined();
    expect(user?.id).toBe(1);
  });

  it('should return an array of users', async () => {
    const users: User[] = await service.getUsers({});
    expect(users).toBeInstanceOf(Array);
    expect(users.length).toBeGreaterThan(0);
  });
});
