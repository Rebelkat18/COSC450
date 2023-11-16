import React from "react";
import "./Results.css";
import { useLocation } from "react-router-dom";
import data from "../data.json";

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
  
  if({...data.Quizzes[0]}){
  setInterval(() =>
  {document.querySelector('body').style.background = colors[active];
  if(colors == "Black"){
    const el = document.querySelectorAll('a');
    for(let i = 0; i < el.length; i++){
      el[i].style.color = "red"
    }
    document.querySelector('h1').style.color = "red";
  }
  else if(colors == "Yellow" || colors == "White"){
      const el = document.querySelectorAll('a');
      for(let i = 0; i < el.length; i++){
        el[i].style.color = "black"
      }
      document.querySelector('h1').style.color = "black";
  }
  active++;});
  }
  
  return (
    <div className="container">
      <header>
        <h1>Quiz City</h1>
        <nav className="Navpage">
          <a href="/COSC450/">Home</a>
          <a href="/COSC450/about">About</a>
          <a href="/COSC450/quizzes">Quizzes</a>
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
