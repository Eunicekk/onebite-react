// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let include = arr2.includes(10);

console.log(include);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(5);

console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => item % 2 === 0);

console.log(findIndex);

// indexOf는 얕은 비교로 이루어지기 때문에 배열에서 특정 객체 값이 존재하는지 확인할 수 없다.
// 단순한 원시 타입의 값을 찾을 때는 indexOf 사용
// 복잡한 객체 타입의 값을 찾을 때는 findIndex 사용용
let objectArr = [{ name: "김윤" }, { name: "부승관" }];
console.log(objectArr.indexOf({ name: "부승관" }));
console.log(objectArr.findIndex((item) => (item.name = "부승관")));

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환하는 메서드
let arr5 = [{ name: "김윤" }, { name: "부승관" }];
const find = arr5.find((item) => item.name === "부승관");

console.log(find);
