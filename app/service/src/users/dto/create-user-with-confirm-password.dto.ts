// src/users/dto/create-user-with-confirm-password.dto.ts
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateUserWithConfirmPasswordDto extends CreateUserDto {
  @ApiProperty({ 
    description: 'User password', 
    example: 'StrongP@ssw0rd!',
    required: true 
  })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(3, { message: 'Password must be at least 3 characters long' })
  @MaxLength(64, { message: 'Password cannot exceed 64 characters' })
  confirmPassword: string;
}
