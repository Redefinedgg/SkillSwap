import { ApiParam, ApiQuery, ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './services/users.service';
import { BadRequestException, Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { UsersQueryDto } from './dto/users-query.dto';
import { User } from '@prisma/client';
import { CreateUserDto, CreateUserWithConfirmPasswordDto, UserResponseDto } from './dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @ApiParam({ name: 'id', type: String, description: 'Unique identifier of the user' })
  @ApiResponse({
    status: 200,
    description: 'User found and returned successfully',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'User with this ID not found',
  })
  async getUser(@Param('id') id: string): Promise<User | null> {
    const user = await this.usersService.getUser({ id: Number(id) });
    if (!user) {
      throw new BadRequestException(`User with ID ${id} not found`);
    }
    return user;
  }

  @Get()
  @ApiQuery({
    name: 'skip',
    required: false,
    type: Number,
    description: 'Number of users to skip',
  })
  @ApiQuery({
    name: 'take',
    required: false,
    type: Number,
    description: 'Number of users to take',
  })
  @ApiQuery({
    name: 'where',
    required: false,
    type: Object,
    description: 'Filter conditions',
  })
  @ApiQuery({
    name: 'orderBy',
    required: false,
    type: Object,
    description: 'Sorting conditions',
  })
  @ApiResponse({
    status: 200,
    description: 'Array of users returned successfully',
    type: UserResponseDto,
    isArray: true,
  })
  async getUsers(@Query() query: UsersQueryDto): Promise<User[]> {
    return this.usersService.getUsers(query);
  }

  @Post()
  @ApiBody({
    type: CreateUserWithConfirmPasswordDto,
    description: 'Data to create a new user. Must include password and confirmPassword.',
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request, invalid user data or passwords do not match',
  })
  async createUser(@Body() data: CreateUserWithConfirmPasswordDto): Promise<User> {
    return this.usersService.createUser(data);
  }
}
