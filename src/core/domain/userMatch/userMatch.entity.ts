import { MatchEntity } from "../match/match.entity";
import { UserEntity } from "../user/user.entity";

export class UserMatchEntity {
  userId: string;
  user?: UserEntity;
  matchId: string;
  match?: MatchEntity;
  isCreator: boolean;
}
