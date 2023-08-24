import { AppModule } from "../../../../../../src/app.module";
import { UseCreate } from "../../../../../../src/application/dto/UseCreate";
import { UserRepository } from "../../../../../../src/infrastructure/outbound/database/prisma/repository/user.repository";
import { Test } from "@nestjs/testing";
import { PrismaService } from "../../../../../../src/infrastructure/outbound/database/prisma/prisma.service";
import { INestApplication } from "@nestjs/common";
import { UserService } from "../../../../../../src/application/services/user.service";

describe("User repository test", () => {
  let userRepository: UserRepository;
  let prisma: PrismaService;
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [],
      providers: [
        UserRepository,
        PrismaService,
        {
          provide: "UserServicePort",
          useClass: UserService,
        },
        {
          provide: "UserRepositoryPort",
          useClass: UserRepository,
        },
      ],
    }).compile();
    app = moduleRef.createNestApplication();

    userRepository = moduleRef.get<UserRepository>(UserRepository);

    prisma = app.get(PrismaService);

    await prisma.cleanDb();
  });

  afterAll(async () => {
    await prisma.cleanDb();
  });

  it("should find a user by id", async () => {
    const userCreate = new UseCreate();
    userCreate.address = "address";
    userCreate.email = "email@email.com";
    userCreate.name = "Cristian";
    userCreate.password = "12345";
    userCreate.isBlocked = false;
    userCreate.telephone = "1231231";

    const createdUser = await userRepository.create(userCreate);

    userRepository.findById(createdUser.id);

    expect(createdUser.id).toBeTruthy();
  });

  it("should create a user in repository", async () => {
    const userCreate = new UseCreate();
    userCreate.address = "address";
    userCreate.email = "email@email.com";
    userCreate.name = "Cristian";
    userCreate.password = "12345";
    userCreate.isBlocked = false;
    userCreate.telephone = "1231231";

    const createdUser = await userRepository.create(userCreate);

    userRepository.findById(createdUser.id);

    expect(createdUser.name).toBe(userCreate.name);
    expect(createdUser.id).toBeTruthy();
  });
});
