import "./Quiz.css";
import React from "react";
import Question from "./Question";
import  {useNavigate}  from "react-router-dom"; 

function Quiz(props) {
  console.log(props);
  const nav = useNavigate();

  const end = () => {
    let e = props.questions.length-1;
    console.log(e + " " + props.step);
    if (e === props.step) {
      console.log("here");
      nav("/results"); 
    }
  };

  const both = () => {
    end();
    props.setStep(props.step + 1)
  }
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
          <button onClick={() => both()}>
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
