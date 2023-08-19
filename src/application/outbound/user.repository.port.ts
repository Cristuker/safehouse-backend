import { Prisma } from "@prisma/client";
import { UserCreated } from "../dto/userCreated";

export abstract class UserRepositoryPort {
  abstract save(user: Prisma.UserCreateInput): Promise<UserCreated>;
}
