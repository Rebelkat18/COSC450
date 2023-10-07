import React from "react";

function Question(props) {
  let q = [];
  for (let x in props.answers) {
    q[x] = props.answers[x].answer;
  }
  // Bad Practice to use index as key but it removed a warning, so I did it anyway. :)
  const qq = q.map((answer, index) => (
    <button key={index} onClick={() => console.log(answer)}>
      {answer}
    </button>
  ));

  return (
    <div>
      <p> {props.question} </p>
      <div className="container">{qq}</div>
    </div>
  );
}
export default Question;
