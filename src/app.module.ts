import { Module } from "@nestjs/common";
import { UserRepository } from "./infrastructure/outbound/database/prisma/repository/user.repository";
import { PrismaModule } from "./infrastructure/outbound/database/prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { ApplicationModule } from "./application/application.module";
import { CoreModule } from "./core/core.module";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";

@Module({
  imports: [
    ApplicationModule,
    CoreModule,
    PrismaModule,
    InfrastructureModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    UserRepository,
    
  ],
})
export class AppModule {}
