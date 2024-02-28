import React from "react";
import "./QuestionPage.css";
import dashes from "./dashes.svg";

const QuestionPage = () => {
  // Placeholder for video source
  const videoSrc = "your-video-source.mp4"; // Update this with your actual video source path

  return (
    <div className="question_page">
      <div className="top">
        <div className="left">
          <img className="dash_left" src={dashes} alt="" />
          <div className="circle_left_ques"></div>
        </div>

        <div className="center">
          <div className="header">
            <p>Je vous préviens</p>
          </div>
          <div className="video-container">
            <video width="100%" src={videoSrc} controls />
          </div>
        </div>

        <div className="right">
          <div className="circle_right_ques">
            <div className="page-counter">
              <p>1/8</p>
            </div>
          </div>
          <img className="dash_right" src={dashes} alt="" />
        </div>
      </div>

      <div className="bottom">
        <div className="button-container">
          <button className="option-button">A</button>
          <button className="option-button">B</button>
          <button className="validate-button">Validez</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
