import { Module } from "@nestjs/common";
import { UserService } from "./services/user.service";
import { UserRepository } from "../infrastructure/outbound/database/prisma/repository/user.repository";

@Module({
  providers: [
    UserService,
    {
      provide: "UserRepositoryPort",
      useClass: UserRepository,
    },
  ],
  exports: [UserService],
})
export class ApplicationModule {}
