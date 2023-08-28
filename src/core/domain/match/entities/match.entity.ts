import { GameEntity } from "../../game/entities/game.entity";
import { UserMatchEntity } from "../../userMatch/entities/userMatch.entity";

export class MatchEntity {
  id: string;
  name: string;
  date: Date;
  level: string;
  status: string;
  gameId: string;
  game?: GameEntity;
  updatedAt: Date;
  createdAt: Date;
  userMatch?: UserMatchEntity[];
  IsDeleted: boolean;
}
