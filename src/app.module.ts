import { Module } from "@nestjs/common";
import { DevtoolsModule } from "@nestjs/devtools-integration";
import { UserRepository } from "./infrastructure/outbound/database/prisma/repository/user.repository";
import { PrismaModule } from "./infrastructure/outbound/database/prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { UserService } from "./application/services/user.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== "production",
    }),
    PrismaModule,
  ],
  controllers: [],
  providers: [UserService, UserRepository],
})
export class AppModule {}
