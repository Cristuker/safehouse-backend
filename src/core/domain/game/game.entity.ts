import { MatchEntity } from "../match/match.entity";

export class GameEntity {
  id: string;
  name: string;
  developer: string;
  category: string;
  maxPlayers: number;
  matches?: MatchEntity[];
}
