import { MatchEntity } from "../../match/entities/match.entity";

export class GameEntity {
  id: string;
  name: string;
  developer: string;
  category: string;
  maxPlayers: number;
  matches?: MatchEntity[];
  updatedAt: Date;
  createdAt: Date;
  IsDeleted: boolean;
}
