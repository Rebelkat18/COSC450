import "./Quiz.css";
import React from "react";
import Question from "./Question";
import { useState } from "react";

function Quiz(props) {
  const [total, setTotal] = useState(0);
  console.log(total);
  return (
    <div>
      <div className="Main">
        <h1> {props.title} </h1>
        <Question {...props.questions[0]} total={total} setTotal={setTotal}/>
        <div>
          <button onClick= {() => console.log("submitted")}> Submit </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
