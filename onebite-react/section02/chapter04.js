// 1. Spread 연산자 : ...
// -> Spread : 흩뿌리다, 펼치라 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
}

console.log(obj2)

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1)

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

// 이 때는 소괄호 안에 사용된 것이기 때문에 Rest 매개변수임!!
function funcB(a, ...rest){ // rest 변수가 마지막으로 와야 함!
    console.log(a)
    console.log(rest)
}

funcB(...arr1)