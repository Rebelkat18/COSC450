import "./Quiz.css";
import React from "react";
import Question from "./Question";

function Quiz(props) {

  return (
    <div>
      <div className="Main">
        <p>Testing Quizzes...</p>
        <h1> {props.title} </h1>
        <Question{...props.questions[0]}/>
      </div>
    </div>
  );
}

export default Quiz;
