import { HttpStatus, INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import * as supertest from "supertest";
import { AppModule } from "../../../../src/app.module";
import { PrismaService } from "../../../../src/infrastructure/outbound/database/prisma/prisma.service";
import { generateUser } from "../../../mocks/user.mock";
import { UserService } from "../../../../src/application/services/user.service";
import { UserRepository } from "../../../../src/infrastructure/outbound/database/prisma/repository/user.repository";

describe("User controller", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let request;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
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
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
    request = supertest(app.getHttpServer());
  });

  beforeEach(async () => {
    await prisma.cleanDb();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should create a user and return 201", async () => {
    const user = generateUser();
    await request.post("/user").send(user).expect(HttpStatus.CREATED);
  });

  it("should return 409 when email is duplicate", async () => {
    const user = generateUser();
    await prisma.user.create({
      data: user,
    });

    await request
      .post("/user")
      .send(user)
      .expect(HttpStatus.CONFLICT)
      .then((res) => {
        expect(res.body).toEqual({
          error: "Conflict",
          message: "E-mail já cadastrado",
          statusCode: 409,
        });
      });
  });
});
