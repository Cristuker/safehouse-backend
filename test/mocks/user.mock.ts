import { UseCreate } from "../../src/application/dto/UseCreate";
import { fakerPT_BR as faker } from "@faker-js/faker";
export function generateUser(setIsBlocked = false): UseCreate {
  const userCreate = new UseCreate();
  userCreate.address = faker.location.street();
  userCreate.email = faker.internet.email();
  userCreate.name = faker.person.fullName();
  userCreate.password = faker.internet.password();
  userCreate.isBlocked = faker.datatype.boolean();
  userCreate.telephone = faker.phone.number();
  return userCreate;
}
