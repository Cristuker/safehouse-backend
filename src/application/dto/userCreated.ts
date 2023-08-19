export interface UserCreated {
  id: number;
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
