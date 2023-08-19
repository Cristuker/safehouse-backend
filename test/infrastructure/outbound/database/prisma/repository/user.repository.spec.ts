import { AppModule } from "../../../../../../src/app.module";
import { UseCreate } from "../../../../../../src/application/dto/UseCreate";
import { UserRepository } from "../../../../../../src/infrastructure/outbound/database/prisma/repository/user.repository";
import { Test } from "@nestjs/testing";
import { PrismaService } from "../../../../../../src/infrastructure/outbound/database/prisma/service/prisma.service";
import { INestApplication } from "@nestjs/common";

describe("User repository test", () => {
  let userRepository: UserRepository;
  let prisma: PrismaService;
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [],
      providers: [UserRepository, PrismaService],
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
    userCreate.setAddress("address");
    userCreate.setEmail("email@email.com");
    userCreate.setName("Cristian");
    userCreate.setPassword("12345");
    userCreate.setIsBlocked(false);
    userCreate.setTelephone("1231231");

    const createdUser = await userRepository.save(userCreate);

    userRepository.findById(createdUser.id);

    expect(createdUser.id).toBeTruthy();
  });

  it("should create a user in repository", async () => {
    const userCreate = new UseCreate();
    userCreate.setAddress("address");
    userCreate.setEmail("email@email.com");
    userCreate.setName("Cristian");
    userCreate.setPassword("12345");
    userCreate.setIsBlocked(false);
    userCreate.setTelephone("1231231");

    const createdUser = await userRepository.save(userCreate);

    userRepository.findById(createdUser.id);

    expect(createdUser.name).toBe(userCreate.getName());
    expect(createdUser.id).toBeTruthy();
  });
});
