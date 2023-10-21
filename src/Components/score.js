// import React from "react";

function score(props) {
    console.log(props);

    props.setTotal(props.selection);
    // for (let index in props.selection) {
    //     console.log(props.total[index].score);
    //     console.log(props.selection[index].score);
    //     // props.setTotal(props.total[index].score + props.selection[index].score);
    // }
  console.log(props.total);
  return;
}

export default score;
