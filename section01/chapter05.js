// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); //모듈러 연산

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN;
console.log(1 * "hello");

// 2. String Type
let myName = "김윤";
let myLocation = "흑석동";
let introduce = myName + myLocation;
console.log(introduce);

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean Type
let isSwitch = true;
let isEmpty = false;

// 4. Null Type (아무것도 없음)
let empty = null;

// 5. undefined Type
let none;
console.log(none);
