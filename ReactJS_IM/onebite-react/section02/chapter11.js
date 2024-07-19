console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);

// 병렬로 수행될 거 같은데..?
//  JS는 쓰레드가 1개 밖에 없는데?
//    setTimeout 같은 비동기 작업들은 자바스크립트 엔진이 아닌
//    Web APIs 에서 실행됨>>>