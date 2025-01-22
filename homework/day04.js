// 1) 책 정보 확인하기
// book 객체 내에 '출판년도(publishedYear)' 속성이 있는지 확인해 결과에 따라 다음과 같이 출력합니다.
// - 속성이 있으면: "출판년도는 ${출판년도}입니다."
// - 속성이 없으면: "출판년도 정보가 없습니다."

const book = {
  title: "한 입 크기로 잘라먹는 리액트",
  author: "이정환",
};

if ("publishedYear" in book) {
  console.log(`출판년도는 ${book.publishedYear}입니다.`);
} else {
  console.log("출판년도 정보가 없습니다.");
}
