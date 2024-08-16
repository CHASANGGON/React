// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1997.1.7");
let date3 = new Date(1997, 1, 7, 23, 28, 38);
let date4 = new Date("1997/01/07/10:10:10");
console.log(date2);
console.log(date3);
console.log(date4);

// 2. 타임 스탬프 -> 꽤 자주 사용됨
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값"
//              -> UTC(협정세계시 : 세계적으로 약속한 시간이 시작되는 시각)
let ts1 = date1.getTime();
console.log(ts1 / 1000);

let date5 = new Date(ts1); // 타임 스탬프 값을 인자(인수)로 넣어주면 타임스탬프에 해당하는 시간으로 생성

console.log(date1, date5); // 둘다 똑같은 시간을 저장

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
  year,
  month,
  date,
  hour,
  minute,
  seconds // month는 +1 해야함
);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 0부터 시작하는 거 참고
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(12);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
