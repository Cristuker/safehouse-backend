import { Injectable } from "@nestjs/common";
import { UseCreate } from "../../../../../application/dto/UseCreate";

@Injectable()
export class UserRepository {
  constructor(private readonly userRepository: UserRepository) {}
  public save(user: UseCreate) {
    this.userRepository.save(user);
  }
}
