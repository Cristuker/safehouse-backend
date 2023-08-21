import { UserCreated } from "../dto/userCreated";
import { UseCreate } from "../dto/UseCreate";
import { User } from "../../core/domain/user.dto";

export interface UserRepositoryPort {
  create(user: UseCreate): Promise<UserCreated>;
  findByEmail(email: string): Promise<User>;
}
