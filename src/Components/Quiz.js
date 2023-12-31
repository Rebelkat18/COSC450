import "./Quiz.css";
import React from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import score from "./score";

function Quiz(props) {
  const nav = useNavigate();

  const stepChange = () => {
    score(props);
    //Check if last question
    if (props.questions.length - 1 === props.step) {
      nav("/COSC450/results", { state: props.total });
    }
    props.setStep(props.step + 1);
    console.log(props.total);

  }
  return (
    <div className="qq-container">
      <div className="Main">
        <h1 className="title"> {props.title} </h1>
        <Question
          {...props.questions[props.step]}
          step={props.step}
          setStep={props.setStep}
          total={props.total}
          setTotal={props.setTotal}
          selection={props.selection}
          setSelection={props.setSelection}
        />
        <button className="submit" onClick={() => stepChange()}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
