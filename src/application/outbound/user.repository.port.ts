import { UserCreated } from "../dto/userCreated";
import { User } from "../../core/domain/user.dto";
import { CreateUserDto } from "../../core/domain/create-user.dto";

export interface UserRepositoryPort {
  create(user: CreateUserDto): Promise<UserCreated>;
  findByEmail(email: string): Promise<User>;
}
