/* eslint-disable prettier/prettier */
import { IsString, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(10)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(10)
    password: string;
}