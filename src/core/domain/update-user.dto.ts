export class UpdateUserDto {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  telephone?: string;
  filePath?: string;
  isBlocked?: boolean;
  unblockDate?: Date;
}
