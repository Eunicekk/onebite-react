// 1) 영화 리뷰 정보 출력하기 (feat.하얼빈 & 위키드)
// - 함수 printMovieReview는 구조 분해 할당을 통해 인수로 전달된 영화 정보 객체의 프로퍼티들을 각각 제공받습니다.
// - 매개변수로 제공된 영화 정보들을 다음과 같이 출력합니다.
//  - 영화 제목은 "제목 : {제목}" 형태로 출력합니다.
//  - 영화 개봉 연도는 "개봉 : {개봉연도}" 형태로 출력합니다.
//  - 첫 번째 리뷰어를 "첫 번째 리뷰어 : {이름}" 형태로 출력합니다.
function printMovieReview({ title, releaseYear, reviewers }) {
  console.log(`제목: ${title}`);
  console.log(`개봉: ${releaseYear}`);

  let [firstReviewer = "리뷰어 미정"] = reviewers;
  console.log(`첫 번째 리뷰어: ${firstReviewer}`);
}

printMovieReview({
  title: "하얼빈",
  releaseYear: 2024,
  reviewers: ["박정민", "김효빈", "이정환"],
});

printMovieReview({
  title: "위키드",
  releaseYear: 2024,
  reviewers: [],
});

// 2) 평균 성적 출력하기
// 다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요
// 매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.
// 반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.
function printAvgScore(students) {
  for (let student in students) {
    let scores = students[student].scores;
    let sum = 0;

    for (let score of scores) {
      sum += score;
    }

    let avg = sum / scores.length;

    console.log(`${student}: ${avg}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});
