/* eslint-disable prettier/prettier */
import { EntityRepository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
    // 
}
