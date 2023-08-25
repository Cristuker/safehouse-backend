import { UserHonorEntity } from "../userHonor/userHonor.entity";

export class HonorEntity {
  id: string;
  name: string;
  points: string;
  punishment: string;
  filePath: string;
  userHonor?: UserHonorEntity[];
}
