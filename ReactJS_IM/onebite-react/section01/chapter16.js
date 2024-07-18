// 1. 상수 객체 -> 상수는 일정한 값
const animal = { // const 로 생성했으니 값의 변경이 안 될 줄 알았지만
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정도 가능하고!
delete animal.color; // 삭제도 가능함!

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
//  -> 즉, 객체의 프로퍼티로 함수가 선언돼 있다면 그것은 메서드가 됨!!

const person = {
    name: "이정환",
    // 메서드 선언
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"](); // 괄호 표기법.. 이건 좀 신기