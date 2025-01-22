import {
  getRandomName,
  getRandomEmail,
  getRandomAge,
  getRandomBirthday,
} from "./random.js";

const person1 = {
  name: getRandomName(),
  email: getRandomEmail(),
  age: getRandomAge(),
  birthday: getRandomBirthday(),
};

const person2 = {
  name: getRandomName(),
  email: getRandomEmail(),
  age: getRandomAge(),
  birthday: getRandomBirthday(),
};

const person3 = {
  name: getRandomName(),
  email: getRandomEmail(),
  age: getRandomAge(),
  birthday: getRandomBirthday(),
};

console.log(person1);
console.log(person2);
console.log(person3);
