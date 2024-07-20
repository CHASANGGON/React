import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

// 부모 컴포넌트
// App 컴포넌트는 조상 컴포넌트(상위 컴포넌트)
// root 컴포넌트가 최상위 컴포넌트
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 1,
    c: 1,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} color={"blue"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header />
      </Button>
    </>
  );
}

export default App;
