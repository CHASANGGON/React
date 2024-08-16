// ES
import mul from "./math.js"; // 중괄호 x, 이름 커스텀 가능
import { add, sub } from "./math.js"; // 확장자 명시!

import randomColor from "randomcolor"; // 라이브러리로부터 import 할 때는 이름만 적으면 됨!

const color = randomColor();
console.log(color);

console.log(mul(1, 2)); // 바로 사용
console.log(add(1, 2));
console.log(sub(1, 2));

CJS
const moduleData = require("./math");
const { add, sub } = require("./math"); // 구조 분해 할당

console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));
console.log(moduleData);
console.log("안녕 Node.js");
