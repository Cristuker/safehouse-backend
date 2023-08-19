import { Injectable } from "@nestjs/common";
import { PrismaService } from "../service/prisma.service";
import { Prisma } from "@prisma/client";
import { UserRepositoryPort } from "../../../../../application/outbound/user.repository.port";

@Injectable()
export class UserRepository implements UserRepositoryPort {
  constructor(private readonly prismaService: PrismaService) {}

  public async save(user: Prisma.UserCreateInput) {
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
