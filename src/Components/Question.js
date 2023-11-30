import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Question.css";

function Question(props) {
  //Making list of answers to display
  let choice = [];
  for (let index in props.answers) {
    choice[index] = props.answers[index].answer;
  }
  const [active, setActive] = useState(choice[0]);

  const select = (answer, index) => {
    console.log("clicked " + index);
    props.setSelection(props.answers[index].score);
    setActive(answer);
  };

  return (
    <div>
      <h2> {props.question} </h2>
      <ButtonGroup className="btn3">
        {choice.map((answer, index) => (
          <ToggleButton
            key={index}
            active={active === answer}
            onClick={() => select(answer, index)}
          >
            {answer}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}
export default Question;
