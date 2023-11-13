import React from "react";
import "./Results.css";
import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();
  const total = location.state;
  
  //sort total for highest score
  let sorted = total.sort((a, b) => (a.score < b.score ? 1 : -1));
  let result = sorted[0].result;
  console.log(total);

  return (
    <div>
      <header>
        <h1>Quiz City</h1>
        <nav className="Navpage">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>
      <div className="Main">
        <h1> Your Results... </h1>
        <p> {result} </p>
      </div>
    </div>
  );
}

export default Results;
