// 함수
let area1 = getArea(10, 20); // 인수 or 인자
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
//  -> 덕분에 함수 선언이 사용보다 아래에 있어도 됨!
function getArea(width, height) { // 함수의 매개변수는 변수명만 작성해주면 됨!
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}