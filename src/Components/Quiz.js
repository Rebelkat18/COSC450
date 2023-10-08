import "./Quiz.css";
import React from "react";
import Question from "./Question";

function Quiz(props) {
  console.log(props);
  return (
    <div>
      <div className="Main">
        <h1 className="title"> {props.title} </h1>
        <Question
          {...props.questions[props.step]}
          step={props.step}
          setStep={props.setStep}
          total={props.total}
          setTotal={props.setTotal}
          selections={props.selections}
          setSelections={props.setSelections}
        />
        <div>
          <button onClick={() => props.setStep(props.step + 1)}>
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
