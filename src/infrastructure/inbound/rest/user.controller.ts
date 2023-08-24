import { Body, Controller, Inject, Post } from "@nestjs/common";
import { UserServicePort } from "../../../application/inbound/user.service.port";
import { User } from "@prisma/client";

@Controller("user")
export class UserController {
  constructor(
    @Inject("UserServicePort")
    private readonly userService: UserServicePort,
  ) {}

  @Post("/")
  async create(@Body() createUserDto: User) {
    await this.userService.create(createUserDto);
  }
}
