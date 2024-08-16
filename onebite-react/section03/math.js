// math module
// 덧셈, 뺼셈 기능
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multifly(a, b) {
  return a * b;
}

// ES
// export { add, sub };

// CJS
// module.exports = { add, sub };
// add: add 라고 적어야 하지만
// key, valye 값이 동일하면 key(value)만 적어도 됨
