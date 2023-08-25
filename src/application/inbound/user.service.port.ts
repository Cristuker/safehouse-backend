import { User } from "@prisma/client";
import { UserCreated } from "../dto/userCreated";
import { CreateUserDto } from "../../core/domain/create-user.dto";

export interface UserServicePort {
  create(user: CreateUserDto): Promise<UserCreated>;
  findByEmail(email: string): Promise<User>;
}
