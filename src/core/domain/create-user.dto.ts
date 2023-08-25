import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "Cristian",
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "email@email.com.br",
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "123@SenhaForte",
  })
  password: string;

  @IsString()
  @ApiProperty({
    example: "Rua dos bobos, n 0",
  })
  address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "99 9 9999 9999",
  })
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
