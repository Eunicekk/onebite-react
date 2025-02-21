// 1) 다음 요구사항을 만족하는 코드를 작성하세요.
// 새로운 변수 max를 만들어 x와 y중 더 큰 수를 할당합니다.
// max를 console에 출력합니다
const x = 15;
const y = 20;
let max = x > y ? x : y;
// let max = Math.max(x, y);

console.log(max);

// 2) 다음 요구사항을 만족하는 코드를 작성하세요.
// 변수 a의 저장된 값의 타입을 문자열로 출력하세요
// 조건문과 typeof 연산자를 이용해 코드를 작성하세요
// ex) a가 number 타입이라면 console.log("숫자")
// ex) a가 string 타입이라면 console.log("문자열")
// ex) a가 boolean 타입이라면 console.log("불리언")
// ...
const a = true;
let type = typeof a;

if (type === "number") {
  console.log("숫자");
} else if (type === "string") {
  console.log("문자열");
} else if (type === "boolean") {
  console.log("불리언");
}

// 3) 다음 요구사항을 만족하는 코드를 작성하세요.
// 주어진 온도에 따라 다음 메세지를 콘솔에 출력하세요
// 온도가 0°C보다 낮으면 "매우 추움"를 출력합니다.
// 온도가 0°C 이상 10°C 미만이면 "추움."를 출력합니다.
// 온도가 10°C 이상 20°C 미만이면 "적당"를 출력합니다.
// 온도가 20°C 이상이면 "더움"를 출력합니다.
let temperature = 10;

if (temperature < 0) {
  console.log("매우 추움");
} else if (temperature >= 0 && temperature < 10) {
  console.log("추움");
} else if (temperature >= 10 && temperature < 20) {
  console.log("적당");
} else {
  console.log("더움");
}
