// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 핉터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "차상곤", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 기존 배열을 정렬함!!(정렬된 배열을 반환하는 것이 아니라)
let arr3 = ["a", "c", "b"];
let arr4 = [10, 1, 4, 3, 6, 7, 2];
arr3.sort(); // python 과 동일
arr4.sort(); // python 과 동일

console.log(arr3);
console.log(arr4); // 배열을 사전순으로 정렬하기 때문에 숫자의 대소 비교와는 다르다!

arr4.sort((a, b) => {
  if (a > b) {
    return 1; // b가 a 앞에 와라(작은 값이 앞에 와라)
  } else if (a < b) {
    return -1; // a가 b 앞에 와라(큰 값이 앞에 와라)
  } else {
    return 0; // 두 값의 자리를 바꾸지 마라
  }
}); // python 과 동일
console.log(arr4); // 배열을 사전순으로 정렬하기 때문에 숫자의 대소 비교와는 다르다!
// 솔직히 왜 한 번에 정렬이 다 완료되는 건지 잘 모르겠다..
// 버블 정렬처럼 한 단계씩 될 거 같은데..

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드(sort와 다른 점!)
// 최근에 추가된 따끈따끈한 함수!
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("-");
console.log(joined);
