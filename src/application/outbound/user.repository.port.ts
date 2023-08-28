import { CreateUserDto } from "../../core/domain/user/dto/create-user.dto";
import { UserEntity } from "../../core/domain/user/entities/user.entity";

export interface UserRepositoryPort {
  create(user: CreateUserDto): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity>;
}
