import { ReportEntity } from "../report/report.entity";
import { UserHonorEntity } from "../userHonor/userHonor.entity";
import { UserMatchEntity } from "../userMatch/userMatch.entity";

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
  createdAt: Date;
  userMatch?: UserMatchEntity[];
  userHonor?: UserHonorEntity[];
  transgessorReport?: ReportEntity[];
  denunciatorReport?: ReportEntity[];
  judgeReport?: ReportEntity[];
}
