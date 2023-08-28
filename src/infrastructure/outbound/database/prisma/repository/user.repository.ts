import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";
import { UserRepositoryPort } from "../../../../../application/outbound/user.repository.port";
import { UserEntity } from "../../../../../core/domain/user/entities/user.entity";

@Injectable()
export class UserRepository implements UserRepositoryPort {
  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail(email: string): Promise<UserEntity> {
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

  public async findById(id: string) {
    return await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });
  }
}
