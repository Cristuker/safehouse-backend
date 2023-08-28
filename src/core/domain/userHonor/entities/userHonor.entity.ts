import { UserEntity } from "../../user/entities/user.entity";
import { HonorEntity } from "../../honor/entities/honor.entity";

export class UserHonorEntity {
  userId: string;
  user?: UserEntity;
  honorId: string;
  honor?: HonorEntity;
  points: number;
  updatedAt: Date;
  createdAt: Date;
  IsDeleted: boolean;
}
