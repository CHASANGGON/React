// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // ON : Big Integer(특수 자료형) -> 웹 개발 중에는 잘 이용하지 않음

if (!f1) {
    console.log("F  alsy");
}

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t2) {
    console.log("Truthy")
}

// 3. 활용 사례

function printName(person) {
    if (!person) { // 이렇게 활용!
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = null;
printName(person);