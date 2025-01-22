// 1) 배열 분할 및 결합하기
// 함수 splitAndCombine은 매개변수로 제공된 배열 arr을 반으로 나눈 다음 분할된 배열을 순서를 바꿔 결합합니다.
// 1. 반으로 나누기
// `- arr1: 0~3번 인덱스까지 분할, 결과는 [0,1,2,3]이 되어야 함
// `- arr2: 4~7번 인덱스까지 분할, 결과는 [4,5,6,7]이 되어야 함
// 2. 순서를 바꿔 결합하기
// `- arr2뒤에 arr1을 결합, 결과는 [4,5,6,7,0,1,2,3]이 되어야 함
// 3. 반환하기
// `- 결합이 완료된 배열을 반환합니다.

function splitAndCombine(arr) {
  let split1 = arr.slice(0, 4);
  let split2 = arr.slice(4, 8);
  return split2.concat(split1);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

// 2) 클릭 이벤트 로그 처리하기
// 1. 매개변수 logs로 이벤트 로그 배열을 전달받습니다.
// 2. 이벤트 로그들 중 type이 "click"에 해당하는 로그만 특별한 형태로 출력합니다
//  - 형태: ${이벤트아이디}: ${이벤트발생시각}
// 3. 이벤트 발생 시각은 toLocaleString 메서드를 사용해 알아보기 쉽게 출력하세요

function printClickEventLogs(logs) {
  logs.forEach((log) => {
    if (log.type === "click") {
      console.log("click :: ", new Date(log.date).toLocaleString());
    }
  });
}

printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },
  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);

// 3) 카페 할인 이벤트
// 1. 카페 메뉴 배열인 menus를 매개변수로 제공받습니다.
// 2. menus 배열의 모든 아이템(메뉴)에 기존가(price)에서 500원 할인된 할인가를 저장하는 discountedPrice를 추가한 새로운 배열을 만듭니다.
// 3. discountedPrice가 추가된 새로운 배열을 반환합니다.

function getDiscountedMenus(menus) {
  return menus.map((menu) => ({
    ...menu,
    discountedPrice: menu.price - 500,
  }));
}

const discountedMenus = getDiscountedMenus([
  { itemId: 1, name: "아메리카노", price: 3000 },
  { itemId: 2, name: "라떼", price: 3500 },
  { itemId: 3, name: "초콜릿 케이크", price: 5000 },
  { itemId: 4, name: "크로와상", price: 2800 },
]);

console.log(discountedMenus);

// 4) 도서 정리하기
// 1. 매개변수 books로 도서 배열을 제공 받습니다.
// 2. books 배열을 도서의 출간일(published)를 기준으로 내림차순(최신순)으로 정렬합니다
// 3. 정렬된 배열을 반환합니다.

function getSortedBooks(books) {
  return books.toSorted((a, b) => {
    return b.published.getTime() - a.published.getTime();
  });
}

const sortedBooks = getSortedBooks([
  {
    title: "한입 리액트",
    published: new Date("2023. 04. 06"),
  },
  {
    title: "웹 프론트엔드 첫 걸음",
    published: new Date("2024. 04. 30"),
  },
  {
    title: "이펙티브 타입스크립트",
    published: new Date("2021. 06. 27"),
  },
  {
    title: "클린코드",
    published: new Date("2013. 12. 24"),
  },
]);

console.log(sortedBooks);
