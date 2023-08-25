export interface UserCreated {
  id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  telephone: string;
  filePath: string;
  isBlocked: boolean;
  unblockDate: Date;
  createdAt: Date;
}
