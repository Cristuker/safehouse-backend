import { fakerPT_BR as faker } from "@faker-js/faker";
import { CreateUserDto } from "../../src/core/domain/user/dto/create-user.dto";
export function generateUser(setIsBlocked = false): CreateUserDto {
  const userCreate = new CreateUserDto();
  userCreate.address = faker.location.street();
  userCreate.email = faker.internet.email();
  userCreate.name = faker.person.fullName();
  userCreate.password = faker.internet.password();
  userCreate.isBlocked = faker.datatype.boolean();
  userCreate.telephone = faker.phone.number();
  userCreate.isBlocked = setIsBlocked;
  return userCreate;
}
