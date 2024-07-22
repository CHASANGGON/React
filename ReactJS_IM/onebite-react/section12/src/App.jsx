import "./App.css";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Notfound from "./pages/Notfound.jsx";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

import { getEmotionImage } from "./util/get-emotion-image.js";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button
        text={"123"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      />
      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      />
      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
