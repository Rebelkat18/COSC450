import React from "react";
import Answer from "./Answer";

function Question(props) {
  console.log(props);
  console.log(props.total);
  let q = [];
  for (let x in props.answers) {
    q[x] = props.answers[x].answer;
  }
  // Bad Practice to use index as key but it removed a warning, so I did it anyway. :)
  const qq = q.map((answer, index) => (
    <button key={index} onClick={() => Answer(props)}>
      {answer}
    </button>
  ));

  return (
    <div>
      <h2> {props.question} </h2>
      <div className="container">{qq}</div>
    </div>
  );
}
export default Question;
