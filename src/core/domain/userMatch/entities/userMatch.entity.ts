import { UserEntity } from "../../user/entities/user.entity";
import { MatchEntity } from "../../match/entities/match.entity";

export class UserMatchEntity {
  userId: string;
  user?: UserEntity;
  matchId: string;
  match?: MatchEntity;
  isCreator: boolean;
  updatedAt: Date;
  createdAt: Date;
  IsDeleted: boolean;
}
