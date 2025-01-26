import { IsOptional, IsObject, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';

export class UsersQueryDto {
  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  take?: number;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => Object)
  where?: Prisma.UserWhereInput;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => Object)
  orderBy?: Prisma.UserOrderByWithRelationInput;
}