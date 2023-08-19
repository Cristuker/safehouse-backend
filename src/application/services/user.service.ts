import { Injectable } from "@nestjs/common";
import { UseCreate } from "../dto/UseCreate";
import { UserCreated } from "../dto/userCreated";
import { UserRepositoryPort } from "../outbound/user.repository.port";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepositoryPort) {}
  async create(user: UseCreate): Promise<UserCreated> {
    return await this.userRepository.save(user);
  }
}
