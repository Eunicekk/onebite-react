// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const length = arr1.push(4, 5, 6, 7);

console.log(arr1);
console.log(length);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환하는 메서드
let arr2 = [1, 2, 3];
const pop = arr2.pop();

console.log(pop);
console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환하는 메서드
let arr3 = [1, 2, 3];
const shift = arr3.shift();

console.log(shift);
console.log(arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const unshift = arr4.unshift(0);

console.log(unshift);
console.log(arr4);

// 5. slice
// 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환하는 메서드
let arr5 = [1, 2, 3, 4, 5];
const slice = arr5.slice(2, 5);
const slice2 = arr5.slice(2);
const slice3 = arr5.slice(-3);

console.log(slice);
console.log(slice2);
console.log(slice3);
console.log(arr5);

// 6. concat
// 두 개의 서로 다른 배여릉ㄹ 이어붙여서 새로운 배열을 반환하는 메서드
let arr6 = [1, 2];
let arr7 = [3, 4];
let concat = arr6.concat(arr7);

console.log(concat);
