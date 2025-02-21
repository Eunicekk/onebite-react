// 1) 우승자는? 광고 시청하고 오시겠습니다!
// 1. 매개변수 ms로 밀리세컨즈 초를 제공받습니다.
// 2. 제공받은 ms만큼 대기했다가 resolve를 호출해 비동기 작업을 완료합니다.
//  - 힌트: Promise를 반환하는 함수는 비동기 함수가 됩니다.
//  - 힌트: setTimeout을 이용하면 특정 ms 만큼 기다렸다가 코드를 실행할 수 있습니다.

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function main() {
  console.log("3초 후 결과를 공개하겠습니다!");
  await delay(3000);
  console.log("승자는 이정환!");
}

main();

// 2) 주문 접수 → 처리 → 취소하기
// - 다음 3개의 비동기 함수를 순서대로 연달아 실행시키세요 (함수를 수정해서는 안됩니다)
//  - receiveOrder: 주문을 받는 함수, 첫번째로 호출되어야 합니다.
//  - processOrder: 1번에서 받은 주문을 처리하는 함수, 두번째로 호출되어야 합니다.
//  - cancelOrder: 2번에서 처리가 완료된 주문을 취소하는 함수, 세번째로 호출되어야 합니다.
// - 예외 상황을 방지하는 에러 핸들링 코드가 필요합니다.
//  - 비동기 작업에서 오류가 발생할 경우 console.error() 메서드를 호출해 에러 메세지를 출력합니다.

/* 1. 주문하는 기능 (수정 X) */
function receiveOrder() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("주문 접수가 완료되었습니다.");
      resolve("주문번호: 123");
    }, 2000)
  );
}

/* 2. 주문을 처리하는 기능 (수정 X) */
function processOrder(orderId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`[${orderId}] 주문이 처리 되었습니다.`);
      resolve(orderId);
    }, 2000)
  );
}

/* 3. 주문을 취소하는 기능 (수정 X) */
function cancelOrder(orderId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`[${orderId}] 주문이 취소되었습니다`);
      resolve();
    }, 1500)
  );
}

receiveOrder()
  .then((orderId) => processOrder(orderId))
  .then((orderId) => cancelOrder(orderId))
  .catch((error) => console.error(error));
