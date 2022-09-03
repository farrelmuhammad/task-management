/* eslint-disable prettier/prettier */
import { Entity } from "typeorm";

@Entity()
export class User {
    id: string;
    username: string;
    password: string;
}