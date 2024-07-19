// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

// 비동기 함수로 바뀌었음
// 기존 : 객체를 그대로 반환하는 함수
// async : 이 객체를 결과값으로 갖는 새로운 Promise로 반환하는 함수

// 그러나 아래와 같이 애초부터 Promise 객체를 반환하는 함수였다면
// 그냥 아무기능없음!(just 반환!)
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    });
  }, 1500);
}

// console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// 기존 방식 : 이렇게 then을 통해서 반환되는 Promise를 처리해야했음
// function printData() {
//     getData().then((result) => {
//         console.log(result);
//     });
// }


// 참고로 여기서도 앞에 async를 붙여야함!
async function printData() {
  const data = await getData();
  console.log(data);
}

printData();