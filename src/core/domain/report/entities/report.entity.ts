import { UserEntity } from "../../user/entities/user.entity";

export class ReportEntity {
  id: string;
  transgressorId: string;
  userTransgressor?: UserEntity;
  denunciatorId: string;
  userDenunciator?: UserEntity;
  judgeId: string;
  userJudge?: UserEntity;
  description: string;
  status: string;
  title: string;
  updatedAt: Date;
  IsDeleted: boolean;
  createdAt: Date;
}
