import { CreateMatchDto } from "../../core/domain/match/dto/create-match.dto";
import { MatchEntity } from "../../core/domain/match/entities/match.entity";

export interface MatchRepositoryPort {
  create(match: CreateMatchDto): Promise<MatchEntity>;
}
