// 1) 모든 약수찾기
// 변수 num의 모든 약수를 다 찾아서 출력하세요
let num = 100;

for (let i = 1; i <= num / 2; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

console.log(num);

// 2) 소수 판별기 (에라토스테네스의 체)
// 함수 isPrimeNumber는 한개의 매개변수 num을 제공받아 소수인지 판별합니다.
// num이 소수라면 true를, 아니라면 false를 반환합니다.
// 예외적으로 1은 소수로 판별하셔도 됩니다!
function isPrimeNumber(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// 3) 계산기 만들기
// 콜백함수를 이용하여 두 수를 덧셈하는 함수 add, 뺄셈하는 함수 sub를 각각 구현하세요
// - 2개의 매개변수 num1, num2를 제공받습니다.
// - 연산의 결과를 반환합니다.
// 다음 조건을 만족하는 함수 calc를 구현하세요
// - 3개의 매개변수 num1, num2, callback을 제공받습니다.
//  - num1, num2 : 연산에 활용될 숫자
//  - callback : 실제로 연산을 수행할 함수
// - callback 함수로 전달된 연산의 결과값을 콘솔에 출력하세요
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

let value1 = calculate(5, 3, add);
let value2 = calculate(5, 3, subtract);

console.log(value1);
console.log(value2);
