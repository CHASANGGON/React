// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
//      반복문이나 조건문은 사용 불가능!

// 2. 숫자, 문자열, 배열 값만 정상적으로 렌더링 된다

// 3. 모든 태그는 닫혀있어야 한다
//      이미지 태그 또한 닫혀야 한다!

// 4. 최상위 태그는 반드시 하나여야만 한다
//      한 개로만 감싸자!
//          빈 태그로도 가능, 실제 페이지에서는 없는 걸로 보임
import "./Main.css";

const Main = () => {
  const number = 10;
  const user = {
    name: "차상곤",
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      <div
        // React 에서는 className 이라고 사용한다!
        className="logout"
        // style={{
        //   backgroundColor: "red",
        //   borderBottom: "5px solid blue",
        // }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }

};

export default Main;
