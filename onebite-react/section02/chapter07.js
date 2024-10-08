// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
// push 메서드는 psuh도 하지만, 길이도 반환함
arr1.push(4, 5, 6);

console.log(arr1);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem);
console.log(arr2);

// 주의!!!
// push, pop보다 느림
// python에서 느린 이유와 동일

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const unshiftedItem = arr4.unshift(0);
console.log(unshiftedItem, arr4);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 원본 배열을 바꾸지는 않음
let sliced2 = arr5.slice(2); // 원본 배열을 바꾸지는 않음
let sliced3 = arr5.slice(-1); // 원본 배열을 바꾸지는 않음
let sliced4 = arr5.slice(-3); // 원본 배열을 바꾸지는 않음
console.log(sliced);
console.log(sliced2);
console.log(sliced3);
console.log(sliced4);

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반ㅂ환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7); // 6에다가 7을 붙이는 방법
