import { Module } from "@nestjs/common";
import { UserRepository } from "./outbound/database/prisma/repository/user.repository";
import { PrismaService } from "./outbound/database/prisma/prisma.service";

@Module({
    providers: [
        UserRepository,
        PrismaService
    ],
    exports: [
        UserRepository
    ]
})
export class InfrastructureModule {}