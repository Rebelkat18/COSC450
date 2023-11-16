function reset(props) {
    props.setQuiz(0);
    props.setTotal(undefined);
    props.setStep(0);
    props.setSelection([]);
  return;
}

export default reset;