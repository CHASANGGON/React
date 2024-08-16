// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // 값이 없을 때를 대비하여 기본값도 설정 가능

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let {
  age: myAge, // 같은 변수명인 age대신 myAge에 저장
  hobby,
  name,
  extra = "hello", // 마찬가지로 기본값 설정 가능
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
//  객체를 넘겼을 때만 중괄호를 사용해서 구조 분해 할당
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);