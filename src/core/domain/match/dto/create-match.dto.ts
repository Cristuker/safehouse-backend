import { MatchStatusType } from "../../../../shared/status.enum";
export class CreateMatchDto {
  name: string;
  date: Date;
  level: string;
  status: MatchStatusType;
  gameId: string;
}
