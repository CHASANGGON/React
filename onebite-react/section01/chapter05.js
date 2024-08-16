// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;
console.log(inf);
console.log(mInf);

let nan = NaN;
console.log(nan);

console.log(1 * "hello");

// 2. String Type
let myName = "이정환"
let myLocation = "목동";
let introduce = myName + myLocation;

console.log(introduce);

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
console.log(introduceText);


// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;
console.log(empty); // 어떠한 값도 없다는 것을 나타내기 위한 변수

// 5. Undefined Type
let none;
console.log(none); // 어떠한 값도 할당되지 않았을 때