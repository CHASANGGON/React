import "./App.css";
import HookExam from "./components/HookExam";
import Register from "./components/Register";
import Main from "./components/Main";

function App() {
  const abc = {
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Main abc={abc}/>
    </>
  );
}

export default App;
