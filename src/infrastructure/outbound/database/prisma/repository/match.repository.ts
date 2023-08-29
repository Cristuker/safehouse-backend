import { Injectable } from "@nestjs/common";
import { MatchRepositoryPort } from "../../../../../application/outbound/match.repository.port";
import { CreateMatchDto } from "../../../../../core/domain/match/dto/create-match.dto";
import { MatchEntity } from "../../../../../core/domain/match/entities/match.entity";
import { PrismaService } from "../prisma.service";

@Injectable()
export class MatchRepository implements MatchRepositoryPort {
  constructor(private readonly prismaService: PrismaService) {}
  async create(match: CreateMatchDto): Promise<MatchEntity> {
    const result = await this.prismaService.match.create({
      data: {
        ...match,
      },
    });
    return result;
  }
}
