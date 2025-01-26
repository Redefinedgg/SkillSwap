import { Inject, Injectable } from '@nestjs/common';
import { UsersRepository } from '../users-repository.interface';

@Injectable()
export class UserValidationService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
  ) {}

  async doesUserExistByEmail(email: string): Promise<void> {
    const user = await this.usersRepository.getUser({ email });
    if (user) {
      throw new Error('User with this email already exists');
    }
  }

  passwordConfirmed(password: string, confirmPassword: string): void {
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }
  }
}
