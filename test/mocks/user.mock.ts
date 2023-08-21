import { UseCreate } from "../../src/application/dto/UseCreate";
import { fakerPT_BR as faker } from '@faker-js/faker'
export function generateUser(setIsBlocked = false): UseCreate {
    const userCreate = new UseCreate();
    userCreate.setAddress(faker.location.street());
    userCreate.setEmail(faker.internet.email());
    userCreate.setName(faker.person.fullName());
    userCreate.setPassword(faker.internet.password());
    userCreate.setIsBlocked(faker.datatype.boolean());
    userCreate.setTelephone(faker.phone.number());
    return userCreate;
}