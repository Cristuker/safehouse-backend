import { Test } from "@nestjs/testing";
import { UserService } from "../../../src/application/services/user.service";
import { PrismaService } from "../../../src/infrastructure/outbound/database/prisma/prisma.service";
import { INestApplication } from "@nestjs/common";
import { UserRepository } from "../../../src/infrastructure/outbound/database/prisma/repository/user.repository";
import { generateUser } from "../../mocks/user.mock";
import { AppModule } from "../../../src/app.module";

describe("User service", () => {
  let userService: UserService;
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [],
      providers: [
        UserService,
        {
          provide: "UserRepositoryPort",
          useClass: UserRepository,
        },
      ],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();
    userService = moduleRef.get<UserService>(UserService);
    prisma = app.get(PrismaService);
  });

  beforeEach(async () => await prisma.cleanDb());

  it("should use a port to create a user using repository", async () => {
    const userCreate = generateUser();
    const createdUser = await userService.create(userCreate);
    expect(createdUser.id).toBeTruthy();
  });

  it("should find a user by e-mail", async () => {
    const userCreate = generateUser();
    await userService.create(userCreate);
    const result = await userService.findByEmail(userCreate.email);
    expect(result).toBeTruthy();
  });
});
