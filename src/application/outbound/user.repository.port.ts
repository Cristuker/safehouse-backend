import { Prisma } from "@prisma/client";
import { UserCreated } from "../dto/userCreated";

export interface UserRepositoryPort {
  save(user: Prisma.UserCreateInput): Promise<UserCreated>;
}
