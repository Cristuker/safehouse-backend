import { UserMatchEntity } from "../../userMatch/entities/userMatch.entity";
import { UserHonorEntity } from "../../userHonor/entities/userHonor.entity";
import { ReportEntity } from "../../report/entities/report.entity";

export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  address: string | null;
  telephone: string;
  filePath: string | null;
  isBlocked: boolean;
  unblockDate: Date | null;
  updatedAt: Date;
  createdAt: Date;
  IsDeleted: boolean;
  userMatch?: UserMatchEntity[];
  userHonor?: UserHonorEntity[];
  transgessorReport?: ReportEntity[];
  denunciatorReport?: ReportEntity[];
  judgeReport?: ReportEntity[];
}
