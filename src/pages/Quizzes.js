import "./Quizzes.css";
import React from "react";
import data from "../data.json";
import Quiz from "../Components/Quiz";

function Quizzes(props) {
  //to see everything...
  // console.log(data);
  
  return (
    <div>
      <header>
        <h1 className="Logo">Quiz City</h1>
        <nav className="Navpage">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>
      <Quiz
        {...data.Quizzes[9]} //To change quiz, change index
        step={props.step}
        setStep={props.setStep}
        total={props.total}
        setTotal={props.setTotal}
        selection={props.selection}
        setSelection={props.setSelection}
      />
    </div>
  );
}

export default Quizzes;
