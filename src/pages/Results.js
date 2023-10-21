import React from "react";
import "./Results.css";
import data from "../data.json";
import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();
  const total = location.state;
    //gonna need to use states for Quizzes[]
    let result;
    
    if(total >= 50){
        result = data.Quizzes[0].results[1];
    }
    else if(total >= 45){
        result = data.Quizzes[0].results[2];
    }
    else if(total >= 40){
        result = data.Quizzes[0].results[3];
    }
    else if(total >= 35){
        result = data.Quizzes[0].results[4];
    }
    else if(total >= 30){
        result = data.Quizzes[0].results[5];
    }
    else if(total >= 25){
        result = data.Quizzes[0].results[6];
    }
    else if(total >= 20){
        result = data.Quizzes[0].results[7];
    }
    else if(total >= 15){
        result = data.Quizzes[0].results[8];
    }
    else if(total >= 5){
        result = data.Quizzes[0].results[9];
    }
    else{
        result = data.Quizzes[0].results[0];
    }
    
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
      <div className="Main">
        <h1> Your Results... </h1>
        <p> {result} </p>
      </div>
    </div>
  );
}

export default Results;
