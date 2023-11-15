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
        <nav className="Navpage">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>

      <ButtonGroup className="btn2">
        <button className="butt" onClick={() => set(0)}>
          {" "}
          What color are you? {" "}
        </button>
        <button className="butt" onClick={() => set(9)}>
          {" "}
          What Friend are you? {" "}
        </button>
      </ButtonGroup>

      <div>
        <img src="204.jpg" id="city" alt="Background of cities."></img>
      </div>

    </div >
  );
}

export default Home;
