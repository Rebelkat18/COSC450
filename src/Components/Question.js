import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Question.css";

function Question(props) {
  //Making list of answers to display
  let q = [];
  for (let x in props.answers) {
    q[x] = props.answers[x].answer;
  }
  const [active, setActive] = useState(q[0]);

  //Showing score...
  console.log(props.total);

  const select = (answer, index) => {
    console.log("clicked " + index);
    props.setTotal(props.total + props.answers[index].score);
    setActive(answer);
  };

  return (
    <div>
      <h2> {props.question} </h2>
      <ButtonGroup className="btn">
        {q.map((answer, index) => (
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
