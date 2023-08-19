import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class User {
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  address: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsString()
  filePath: string;

  @IsBoolean()
  isBlocked: boolean;

  @IsNumber()
  unblockDate: Date | string;

  @IsNumber()
  createdAt: Date | string;
}
