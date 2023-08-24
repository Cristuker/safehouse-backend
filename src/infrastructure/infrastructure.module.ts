import { Module } from "@nestjs/common";
import { UserRepository } from "./outbound/database/prisma/repository/user.repository";
import { PrismaService } from "./outbound/database/prisma/prisma.service";
import { UserController } from "./inbound/rest/user.controller";
import { UserService } from "../application/services/user.service";

@Module({
  controllers: [UserController],
  providers: [
    UserRepository,
    PrismaService,
    {
      provide: "UserServicePort",
      useClass: UserService,
    },
    {
      provide: "UserRepositoryPort",
      useClass: UserRepository,
    },
  ],
  exports: [UserRepository],
})
export class InfrastructureModule {}
