import React from "react";
import "./Results.css";

function Results() {
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
      <div className="Main">
        <h1> Your Results... </h1>
      </div>
    </div>
  );
}

export default Results;
