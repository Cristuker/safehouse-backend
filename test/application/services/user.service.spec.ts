import { Test } from "@nestjs/testing";
import { AppModule } from "../../../src/app.module";
import { UserService } from "../../../src/application/services/user.service";
import { UseCreate } from "../../../src/application/dto/UseCreate";
import { PrismaService } from "../../../src/infrastructure/outbound/database/prisma/service/prisma.service";
import { INestApplication } from "@nestjs/common";

describe("User service", () => {
  let userService: UserService;
  let app: INestApplication;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [],
      providers: [UserService],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();
    userService = moduleRef.get<UserService>(UserService);
    prisma = app.get(PrismaService);

    await prisma.cleanDb();
  });

  it("should use a port to create a user using repository", async () => {
    const userCreate = new UseCreate();
    userCreate.setAddress("address");
    userCreate.setEmail("email@email.com");
    userCreate.setName("Cristian");
    userCreate.setPassword("12345");
    userCreate.setIsBlocked(false);
    userCreate.setTelephone("1231231");
    const createdUser = await userService.create(userCreate);
    expect(createdUser.id).toBeTruthy();
  });
});
