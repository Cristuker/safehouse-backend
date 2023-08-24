import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { UseCreate } from "../dto/UseCreate";
import { UserCreated } from "../dto/userCreated";
import { UserRepositoryPort } from "../outbound/user.repository.port";
import { User } from "../../core/domain/user.dto";

@Injectable()
export class UserService {
  constructor(
    @Inject("UserRepositoryPort")
    private readonly userRepository: UserRepositoryPort,
  ) {}

  async create(user: UseCreate): Promise<UserCreated> {
    const emailAlreadyExists = await this.findByEmail(user.email);
    if (emailAlreadyExists) {
      throw new ConflictException("E-mail já cadastrado");
    }
    return await this.userRepository.create(user);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findByEmail(email);
  }
}
