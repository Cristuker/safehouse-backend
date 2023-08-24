import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";
import { UserRepositoryPort } from "../../../../../application/outbound/user.repository.port";
import { UseCreate } from "../../../../../application/dto/UseCreate";
import { UserCreated } from "../../../../../application/dto/userCreated";
import { User } from "../../../../../core/domain/user.dto";

@Injectable()
export class UserRepository implements UserRepositoryPort {
  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail(email: string): Promise<User> {
    return await this.prismaService.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  public async create(user: Prisma.UserCreateInput) {
    return await this.prismaService.user.create({
      data: { ...user },
    });
  }

  public async findById(id: number) {
    return await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });
  }
}
