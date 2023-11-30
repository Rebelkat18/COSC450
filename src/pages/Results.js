import React from "react";
import "./Results.css";
import { useLocation } from "react-router-dom";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
import { value } from "./Menu";
import { Link } from "react-router-dom";

function Results() {
  const location = useLocation();
  const nav = useNavigate();

  const total = location.state;
  var active = 0;
  var colors;
  var names;
  var change = document.querySelector('body');
  let pics = ["Ross.jpg"];

  //sort total for highest score
  let sorted = total.sort((a, b) => (a.score < b.score ? 1 : -1));
  let result = sorted[0].result;
  console.log(total);
  colors = [sorted[0].result];
  names = [sorted[0].result]

  switch (value) {
    case data.Quizzes[9]:
      setInterval(() => {
        change.style.background = colors[active];
        active++;
      });
      break;
    case data.Quizzes[0]:
      if (names === "Ross Gellar") {
        document.body.style.backgroundImage = "url('" + pics[0] + "')";
      }
      break;
    default:
      break;
  }


  return (
    <div className="results-Con">
      <header>
        <h1>Quiz City</h1>
        <nav className="Navpage">
          <Link to="/COSC450/">Home</Link>
          <Link to="/COSC450/about">About</Link>
          <Link to="/COSC450/menu">Quizzes</Link>
        </nav>
      </header>
      <div className="Main">
        <h1> Your Results... </h1>
        <p> {result} </p>
        <button className="submit2" onClick={() => { nav("/COSC450/"); document.querySelector('body').style.background = ""; }}>
          {" "}
          Home{" "}
        </button>
        <div>
        <button className="submit2" onClick={() => alert("Email Your Results")}>
          {" "}
          Email Your Results{" "}
        </button>
        </div>
        {/* gonna use emailjs to send results to email */}
      </div>
    </div>
  );
}

export default Results;
