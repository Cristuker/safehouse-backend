import { fakerPT_BR as faker } from "@faker-js/faker";
import { CreateMatchDto } from "../../src/core/domain/match/dto/create-match.dto";
import { MatchStatusEnum } from "../../src/shared/status.enum";
export function generateMatch(level = "Iniciante"): CreateMatchDto {
  const matchCreated = new CreateMatchDto();
  matchCreated.date = new Date();
  matchCreated.gameId = faker.string.uuid();
  matchCreated.level = level;
  matchCreated.status = MatchStatusEnum.OPEN;
  matchCreated.name = faker.company.name();

  return matchCreated;
}
