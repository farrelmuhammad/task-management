/* eslint-disable prettier/prettier */
import { IsNotEmpty, isNotEmpty } from 'class-validator';
// import { IsNotEmpty } from 'class-validator/types/decorator/decorators';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
