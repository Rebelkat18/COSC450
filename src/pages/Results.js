import React from "react";
import "./Results.css";
import data from "../data.json";
// import {total} from "../index";

function Results() {
    //gonna need to use states for Quizzes[]
    // console.log(data.Quizzes[0].results[0]);
    let result = data.Quizzes[0].results[0];
    
    // if(total > 10){
    //     result = data.Quizzes[0].results[1];
    // }
    
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
