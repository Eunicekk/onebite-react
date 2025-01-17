// 1. if 조건문 (if문)
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참입니다!");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  console.log("num은 10 미만입니다.");
  console.log("조건이 거짓입니다!");
}

// 2. switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰돌이");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  case "rabbit": {
    console.log("토끼");
    break;
  }
  default: {
    console.log("그런 동물은 모릅니다.");
  }
}
