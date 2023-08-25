import { GameEntity } from "../game/game.entity";
import { UserMatchEntity } from "../userMatch/userMatch.entity";

export class MatchEntity {
  id: string;
  name: string;
  date: Date;
  level: string;
  status: string;
  gameId: string;
  game?: GameEntity;
  userMatch?: UserMatchEntity[];
}
