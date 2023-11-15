import React from "react";
import "./Results.css";
import { useLocation } from "react-router-dom";
import data from "../data.json";
import { Link } from "react-router-dom";

function Results() {
  const location = useLocation();
  const total = location.state;
  var active = 0;
  var colors;


  //sort total for highest score
  let sorted = total.sort((a, b) => (a.score < b.score ? 1 : -1));
  let result = sorted[0].result;
  console.log(total);
  colors = [sorted[0].result];

  if ({ ...data.Quizzes[9] }) {
    setInterval(() => {
      document.querySelector('body').style.background = colors[active];
      active++;
    });
  }


  return (
    <div className="container">
      <header>
        <h1>Quiz City</h1>
        <nav className="Navpage">
          <Link to="/COSC450/">Home</Link>
          <Link to="/COSC450/about">About</Link>
          <Link to="/COSC450/quizzes">Quizzes</Link>
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
