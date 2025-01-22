import Chance from "chance";
const change = new Chance();

/* chance를 이용해 무작위 이름을 생성해 반환 */
export function getRandomName() {
  return change.name();
}

/* chance를 이용해 무작위 이메일을 생성해 반환 */
export function getRandomEmail() {
  return change.email();
}

/* chance를 이용해 무작위 나이를 생성해 반환 */
export function getRandomAge() {
  return change.age();
}

/* chance를 이용해 무작위 생일을 생성해 반환 */
export function getRandomBirthday() {
  return change.birthday();
}
