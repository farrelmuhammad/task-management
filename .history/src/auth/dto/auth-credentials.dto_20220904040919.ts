/* eslint-disable prettier/prettier */
import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(10)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(10)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    password: string;
}