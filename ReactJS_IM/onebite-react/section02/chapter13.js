// 인자(인수)로는 비동기 작업을 실제로 진행할 콜백함수
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 성공과 실패 상태로 바꾸는 resolve, reject 함수

    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      // const num = 10;

      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }

      // console.log("안녕");

      // resolve("안녕");
      // PromiseState : pending -> "fulfilled"
      // PromiseResult : "안녕"

      // reject("왜 실패했는지 이유...");
      // PromiseState : pending -> "rejected"
      // PromiseResult : "왜 실패했는지 이유..."
    }, 2000);
  });
  return promise;
}
// console.log(promise); // pending(대기)
// then 메서드
// -> 그 후에
// Promise가 성공했을 경우 실행
// promise.then((value) => {
//   console.log(value);
// });

// // Promise가 실패했을 경우 실행
// promise.catch((error) => {
//   console.log(erroe);
// });

// // 이어붙여서 실행도 가능
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result); // 성공하면 promise 객체를 반환
  })
  .then((result) => {
    console.log(result);
    return add10(result);
    // return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
