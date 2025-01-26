import { ApiProperty } from "@nestjs/swagger";
import { 
  IsEmail, 
  IsNotEmpty, 
  MinLength, 
  MaxLength, 
  Matches, 
  IsString, 
  ValidateIf 
} from "class-validator";

export class CreateUserDto {
  /** 
   * User's email address 
   * Must be a valid email format
   */
  @ApiProperty({ 
    description: 'User email address', 
    example: 'john.doe@example.com',
    required: true 
  })
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  @MaxLength(100, { message: 'Email cannot exceed 100 characters' })
  email: string;

  /** 
   * User's full name 
   * Must be between 2 and 50 characters
   */
  @ApiProperty({ 
    description: 'User full name', 
    example: 'John Doe',
    required: true 
  })
  @IsString({ message: 'Full name must be a string' })
  @IsNotEmpty({ message: 'Full name is required' })
  @MinLength(2, { message: 'Full name must be at least 2 characters long' })
  @MaxLength(50, { message: 'Full name cannot exceed 50 characters' })
  @Matches(/^[a-zA-Z\s]+$/, { message: 'Full name can only contain letters and spaces' })
  fullName: string;

  /** 
   * Unique username 
   * Must be between 3 and 20 characters
   */
  @ApiProperty({ 
    description: 'Unique username', 
    example: 'johndoe',
    required: true 
  })
  @IsString({ message: 'Username must be a string' })
  @IsNotEmpty({ message: 'Username is required' })
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  @MaxLength(20, { message: 'Username cannot exceed 20 characters' })
  @Matches(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers, and underscores' })
  username: string;

  /** 
   * User password 
   * Must meet complexity requirements
   */
  @ApiProperty({ 
    description: 'User password', 
    example: 'StrongP@ssw0rd!',
    required: true 
  })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(3, { message: 'Password must be at least 3 characters long' })
  @MaxLength(64, { message: 'Password cannot exceed 64 characters' })
  password: string;

}