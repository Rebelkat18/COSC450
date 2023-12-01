import "./Menu.css";
import { Link } from "react-router-dom";
import data from "../data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import reset from "../Components/Reset";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Menu = (props) => {
  //Making list of answers to display
  let choice = [];
  for (let index in data.Quizzes) {
    choice[index] = data.Quizzes[index].title;
  }

  const nav = useNavigate();

  const set = (value) => {
    reset(props);
    props.setQuiz(value);
    nav("/COSC450/quizzes");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="Menu-container">
      <header>
        <h1>Quiz City</h1>
        <p> (for a school project) </p>
        <nav className="Navpage">
          <Link to="/COSC450/">Home</Link>
          <Link to="/COSC450/about">About</Link>
          <Link to="/COSC450/menu">Quizzes</Link>
        </nav>
      </header>
      <div className="Main">
        <div className="btn-group-vertical">
        {choice.map((answer, index) => (
          <ToggleButton
            key={index}
            onClick={() => set(index)}
          >
            {answer}
          </ToggleButton>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
export var value;
