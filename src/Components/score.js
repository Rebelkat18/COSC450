function score(props) {
  const clearSelection = () => {
    let clear = [];
    for (let index in props.selection) {
      clear[index] = props.selection[index];
      clear[index].score = 0;
    }
    return clear;
  }

  if (props.total === undefined) {
    let total = [];
    //Make empty array of scores
    for (let index in props.questions[0].answers[0].score) {
      total[index] = props.questions[0].answers[0].score[index];
      total[index].score = 0;
    }
    props.setTotal(total);
    //Add first score
    for (let index in props.selection) {
      total[index].score += props.selection[index].score;
    }
    props.setTotal(total);
  } else {
    let total = props.total;
    for (let index in props.selection) {
      total[index].score += props.selection[index].score;
    }
    props.setTotal(total);
    props.setSelection(clearSelection());

  }
  return;
}

export default score;
