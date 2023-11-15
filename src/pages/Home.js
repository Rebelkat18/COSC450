import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Home(props) {
  const nav = useNavigate();

  window.addEventListener("scroll", () => {
    document.body.style.setProperty(
      "--scroll",
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  });

  const set = (value) => {
    props.setQuiz(value);
    nav("/quizzes");
  }

  return (
    <div className="home-Container">
      <header>
        <h1>Quiz City</h1>
        <p> (for a school project) </p>
        <nav className="Navpage">
          <a href="/COSC450/">Home</a>
          <a href="/COSC450/about">About</a>
          <a href="/COSC450/quizzes">Quizzes</a>
        </nav>
      </header>

      <ButtonGroup className="btn2">
        <button className="butt" onClick={() => set(0)}>
          {" "}
          Which color are you? {" "}
        </button>
        <button className="butt" onClick={() => set(1)}>
          {" "}
          Which day of the week are you? {" "}
        </button>
        <button className="butt" onClick={() => set(9)}>
          {" "}
          Which Friend are you? {" "}
        </button>
      </ButtonGroup>

      <div>
        <img src="204.jpg" id="city" alt="Background of cities."></img>
      </div>

    </div >
  );
}

export default Home;
