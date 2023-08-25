import { Body, Controller, Inject, Post } from "@nestjs/common";
import { UserServicePort } from "../../../application/inbound/user.service.port";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../../../core/domain/create-user.dto";

@Controller("user")
@ApiTags("User")
export class UserController {
  constructor(
    @Inject("UserServicePort")
    private readonly userService: UserServicePort,
  ) {}

  @Post("/")
  @ApiOperation({ summary: "Create user" })
  @ApiResponse({ status: 409, description: "Conflict." })
  @ApiResponse({ status: 201, description: "Created." })
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
  }
}
