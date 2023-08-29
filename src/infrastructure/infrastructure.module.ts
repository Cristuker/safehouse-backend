import { Module } from "@nestjs/common";
import { UserRepository } from "./outbound/database/prisma/repository/user.repository";
import { PrismaService } from "./outbound/database/prisma/prisma.service";
import { UserController } from "./inbound/rest/user.controller";
import { UserService } from "../application/services/user.service";
import { MatchRepository } from "./outbound/database/prisma/repository/match.repository";

@Module({
  controllers: [UserController],
  providers: [
    UserRepository,
    PrismaService,
    MatchRepository,
    {
      provide: "UserServicePort",
      useClass: UserService,
    },
    {
      provide: "UserRepositoryPort",
      useClass: UserRepository,
    },
    {
      provide: "MatchRepositoryPort",
      useClass: MatchRepository,
    },
  ],
  exports: [UserRepository, MatchRepository],
})
export class InfrastructureModule {}
