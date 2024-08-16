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
  }, 2000);
});
return promise;
console.log(promise); // pending(대기)

// then 메서드
// Promise가 성공했을 경우 실행
promise.then((value) => {
  console.log(value);
});

// catch 메서드
// Promise가 실패했을 경우 실행
promise.catch((error) => {
  console.log(erroe);
}); 