import "./Quiz.css";
import React from "react";
import Question from "./Question";
import  {useNavigate}  from "react-router-dom"; 
import score from "./score";

function Quiz(props) {
  const nav = useNavigate();

  // let total = [0];
  // for (let index in data.Quizzes[0].questions[0].answers[0].score) {
  //   total[index] = data.Quizzes[0].questions[0].answers[0].score[index];
  //   total[index].score = 0;
  // }
  // props.setTotal(total);

  const stepChange = () => {
    //Check if last question
    score(props);
    if (props.questions.length-1 === props.step) {
      console.log(props.total);
      nav("/results", {state: props.total}); 
    }
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
          selection={props.selection}
          setSelection={props.setSelection}
        />
        <div>
          <button onClick={() => stepChange()}>
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
