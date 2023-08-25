import { HonorEntity } from "../honor/honor.entity";
import { UserEntity } from "../user/user.entity";

export class UserHonorEntity {
  userId: string;
  user?: UserEntity;
  honorId: string;
  honor?: HonorEntity;
  points: number;
  updatedAt: Date;
}
