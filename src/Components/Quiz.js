import "./Quiz.css";
import React from "react";

function Quiz(props) {
  return (
    <div>
      <div className="Main">
        <p>Testing Quizzes...</p>
        <h1> {props.title} </h1>
      </div>
    </div>
  );
}

export default Quiz;