// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA;
varA();

// 함수도 하나의 값으로서 취급할 수 있음
// 그러나 이렇게 함수를 만들면 함수의 이름으로 호출이 불가능함!
// -> 어차피 함수의 이름은 호출이 불가능한데, 존재할 필요도 없음!
//  -> 익명 함수의 등장
//   -> 호이스팅이 되지 않음
let varB = function () {
    console.log("funcB");
};

varB();


// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
