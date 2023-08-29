import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "../../../../../../src/app.module";
import { UserService } from "../../../../../../src/application/services/user.service";
import { PrismaService } from "../../../../../../src/infrastructure/outbound/database/prisma/prisma.service";
import { UserRepository } from "../../../../../../src/infrastructure/outbound/database/prisma/repository/user.repository";
import { MatchRepository } from "../../../../../../src/infrastructure/outbound/database/prisma/repository/match.repository";
import { generateMatch } from "../../../../../mocks/match.mock";

describe("Match Repository", () => {
  let prisma: PrismaService;
  let matchRepository: MatchRepository;
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
        MatchRepository,
      ],
    }).compile();
    app = moduleRef.createNestApplication();

    matchRepository = moduleRef.get<MatchRepository>(MatchRepository);

    prisma = app.get(PrismaService);

    await prisma.cleanDb();
  });

  afterAll(async () => {
    await prisma.cleanDb();
  });

  it("should create a match", async () => {
    const match = generateMatch();

    const createdMatch = await matchRepository.create(match);

    expect(createdMatch.name).toBe(match.name);
    expect(createdMatch.id).toBeTruthy();
    expect(createdMatch).toHaveProperty("IsDeleted");
    expect(createdMatch).toHaveProperty("createdAt");
    expect(createdMatch).toHaveProperty("updatedAt");
  });
});
