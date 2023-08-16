import { UseCreate } from "../../../../../../src/application/dto/UseCreate";
import { UserRepository } from "../../../../../../src/infrastructure/outbound/database/prisma/repository/user.repository";
import { Test } from "@nestjs/testing";

describe("User repository test", () => {
  let userRepository: UserRepository;

  //   beforeEach(async () => {
  //     const moduleRef = await Test.createTestingModule({
  //       controllers: [],
  //       providers: [U],
  //     }).compile();

  //     catsService = moduleRef.get<CatsService>(CatsService);
  //     catsController = moduleRef.get<CatsController>(CatsController);
  //   });
  it("should create a user in repository", () => {
    const userCreate = new UseCreate();
    userCreate.setAddress("address");
    userCreate.setEmail("email@email.com");
    userCreate.setName("Cristian");
    userCreate.setPassword("12345");

    userRepository.save(userCreate);
  });
});
