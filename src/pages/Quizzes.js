import "./Quizzes.css";
import React from "react";
import data from "../data.json";
import Quiz from "../Components/Quiz";
import { Link } from "react-router-dom";
import reset from "../Components/Reset";

function Quizzes(props) {
  //to see everything...
  // console.log(data);

  return (
    <div className="container">
      <header>
        <h1 className="Logo">Quiz City</h1>
        <nav className="Navpage">
        <Link to="/COSC450/" onClick={() => reset(props)}>Home</Link>
          <Link to="/COSC450/about" onClick={() => reset(props)}>About</Link>
          <Link to="/COSC450/quizzes" onClick={() => reset(props)}>Quizzes</Link>
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
