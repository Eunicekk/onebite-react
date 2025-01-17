// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);

let varB = function () {
  console.log("funcB");
};

varB();

// 화살표 함수
let varC = (value) => value + 1;

console.log(varC(10));
