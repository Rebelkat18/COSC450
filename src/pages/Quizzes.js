import "./Quizzes.css";
import React from "react";
import data from "../data.json";
import Quiz from "../Components/Quiz";

function Quizzes() {
  console.log(data);
  return (
    <div>
      <header>
        <h1 className="Logo">Quiz City</h1>
        <nav className="Navpage">
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>
        <Quiz {...data.Quizzes[0]}/>
    </div>
  );
}

export default Quizzes;
