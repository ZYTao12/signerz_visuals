import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import blob from "./blob1.svg";
import dashes from "./dashes.svg";

function App() {
  const navigate = useNavigate();
  return (
    <div className="start_page">
      <div className="circle_left_top"></div>
      <div className="circle_middle"></div>
      <img className="dash_left_bottom" src={dashes} alt="" />
      <img className="dash_right_bottom" src={dashes} alt="" />
      <div className="main_info">
        <img className="blob" src={blob} alt="" />
        {/*
        <Link to="QuestionPage">
          <button className="start-button">Commencez</button>
        </Link>
        */}
        <button onClick={() => navigate("/question")} className="start-button">
          Commencez
        </button>
      </div>
      {/*
        <Routes>
          <Route path="./questions" element={<QuestionPage />} />
        </Routes>
      */}
    </div>
  );
}

export default App;
