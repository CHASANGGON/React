// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

arr1.forEach(function (item, index, arr) {
  console.log(index, item * 2, arr);
});

let doubledArr = [];

arr1.forEach((item, idx, arr) => {
  // doubledArr[idx] = item * 2;
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let arr4 = [1, 1, 1];
let index = arr3.indexOf(2);
let index2 = arr3.indexOf(1);
console.log(index);
console.log(index2); // 같은 값이 여러 개면 제일 첫번째 값 반환

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함술르 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr5 = [1, 2, 3];
const findedIndex = arr5.findIndex((item) => {
  if (item % 2 !== 0) {
    return true;
  } // 가장 처음으로 만족하는 인덱스를 반환
  // item % 2 !== 0
});

console.log(findedIndex); // 첫 번째 인덱스 0을 반환 -> 출력

// indexOf 는 객체에서의 인덱스를 찾을 수 없다!
// 그래서 findIndex가 존재하는 것!

let obj = [{ name: "차상곤" }, { name: "홍길동" }];

console.log(obj.indexOf({ name: "차상곤" })); // -1
// indexOf는 기본적으로 얕은 비교를 하기 때문
// 얕은 비교란 값의 비교 (===)
// 중요한 점은 객체는 참조값을 가지고 있기 때문에, 둘의 원본은 다를 것이다..!
// 그래서 값은 같게 보이지만, 실제로는 다른 (주소)값을 갖고 있는 것
// 이럴 때 findIndex를 사용

console.log(obj.findIndex((item) => item.name === "홍길동")); // 1

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr6 = [{ name: "차상곤" }, { name: "홍길동" }];

const finded = arr6.find((item) => item.name === "홍길동");

console.log(finded);
