import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import reset from "../Components/Reset";
import city from "../Components/204.jpg";
import { useEffect } from "react";

function Home(props) {
  const nav = useNavigate();

  window.addEventListener("scroll", () => {
    document.body.style.setProperty(
      "--scroll",
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  });

  const set = (value) => {
    reset(props);
    props.setQuiz(value);
    nav("/COSC450/quizzes");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-Con">
      <header>
        <h1>Quiz City</h1>
        <p> (for a school project) </p>
        <nav>
          <Link to="/COSC450/" onClick={() => reset(props)}>Home</Link>
          <Link to="/COSC450/about" onClick={() => reset(props)}>About</Link>
          <Link to="/COSC450/menu" onClick={() => reset(props)}>Quizzes</Link>
        </nav>
      </header>

      <div>
        <img src={city} id="city" alt="Background of cities."></img>
      </div>

      <ButtonGroup className="btn2">
      <div class="btn-group-vertical">
        <button className="butt" onClick={() => set(0)}>
          {" "}
          Which color are you? {" "}
        </button>
        <button className="butt" onClick={() => set(1)}>
          {" "}
          Which day of the week are you? {" "}
        </button>
        <button className="butt" onClick={() => set(2)}>
          {" "}
          Which month are you? {" "}
        </button>
        <button className="butt" onClick={() => set(3)}>
          {" "}
          Which Pokemon are you? {" "}
        </button>
        <button className="butt" onClick={() => set(4)}>
          {" "}
          Which Friend are you? {" "}
        </button>
        <button className="butt" onClick={() => set(5)}>
          {" "}
          Which programming language are you? {" "}
        </button>
        <button className="butt" onClick={() => set(6)}>
          {" "}
          Which data structure are you? {" "}
        </button>
        <button className="butt" onClick={() => set(7)}>
          {" "}
          Which variable are you? {" "}
        </button>
        <button className="butt" onClick={() => set(8)}>
          {" "}
          Which video game are you? {" "}
        </button>
        </div>
      </ButtonGroup>
    </div >
  );
}

export default Home;
