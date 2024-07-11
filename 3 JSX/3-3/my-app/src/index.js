import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NotifiactionList from "./chapter_06/NotificationList";
import Accommodate from "./chapter_07/Accommodate";
import ConfirmButton from "./chapter_08/ConfirmButton";
import LandingPage from "./chapter_09/LnadingPage";


ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();