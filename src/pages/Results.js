import React from "react";
import "./Results.css";
import { useLocation } from "react-router-dom";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

function Results() {
  const location = useLocation();
  const nav = useNavigate();

  const total = location.state;
  var active = 0;
  var colors;
  var change = document.querySelector('body');

  //sort total for highest score
  let sorted = total.sort((a, b) => (a.score < b.score ? 1 : -1));
  let result = sorted[0].result;
  console.log(total);
  colors = [sorted[0].result];

  
  if({...data.Quizzes[0]}){
  setInterval(() =>
  {change.style.background = colors[active];
  active++;});
  }
 
  
  return (
    <div className="results-Con">
      <header>
        <h1>Quiz City</h1>
        <nav className="Navpage">
        </nav>
      </header>
      <div className="Main">
        <h1> Your Results... </h1>
        <p> {result} </p>
        <button className="submit" onClick={() =>{nav("/COSC450/"); document.querySelector('body').style.background = "";}}>
          {" "}
          Home{" "}
        </button>
        <button className="submit" onClick={() => alert("Email Your Results")}>
          {" "}
          Email Your Results{" "}
        </button>
        {/* gonna use emailjs to send results to email */}
      </div>
    </div>
  );
}

export default Results;
