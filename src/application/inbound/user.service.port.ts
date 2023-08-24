import { User } from "@prisma/client";
import { UseCreate } from "../dto/UseCreate";
import { UserCreated } from "../dto/userCreated";

export interface UserServicePort {
  create(user: UseCreate): Promise<UserCreated>;
  findByEmail(email: string): Promise<User>;
}
