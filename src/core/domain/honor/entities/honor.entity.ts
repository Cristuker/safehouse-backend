import { UserHonorEntity } from "../../userHonor/entities/userHonor.entity";

export class HonorEntity {
  id: string;
  name: string;
  points: string;
  punishment: string;
  filePath: string;
  updatedAt: Date;
  createdAt: Date;
  IsDeleted: boolean;
  userHonor?: UserHonorEntity[];
}
