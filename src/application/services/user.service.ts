import { Inject, Injectable } from "@nestjs/common";
import { UseCreate } from "../dto/UseCreate";
import { UserCreated } from "../dto/userCreated";
import { UserRepositoryPort } from "../outbound/user.repository.port";

@Injectable()
export class UserService {
  private userRepository: UserRepositoryPort;

  constructor(
    @Inject("UserRepositoryPort")
    private readonly userRepo: UserRepositoryPort,
  ) {
    this.userRepository = userRepo;
  }

  async create(user: UseCreate): Promise<UserCreated> {
    return await this.userRepository.save(user);
  }
}
