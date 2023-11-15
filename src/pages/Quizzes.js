import "./Quizzes.css";
import React from "react";
import data from "../data.json";
import Quiz from "../Components/Quiz";

function Quizzes(props) {
  //to see everything...
  // console.log(data);
  
  return (
    <div className="container">
      <header>
        <h1 className="Logo">Quiz City</h1>
        <nav className="Navpage">
          <a href="/COSC450/">Home</a>
          <a href="/COSC450/about">About</a>
          <a href="/COSC450/quizzes">Quizzes</a>
        </nav>
      </header>
      <Quiz
        {...data.Quizzes[props.quiz]} //To change quiz, change index
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
