import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Switch, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Quizzes from "./pages/Quizzes";
import Results from "./pages/Results";
import { useState } from "react";

export default function App() {
  const [total, setTotal] = useState(undefined);
  const [step, setStep] = useState(0);
  const [selection, setSelection] = useState([]);
  const [quiz, setQuiz] = useState(0);


  return (
    <Switch>
      <Routes>
        <Route exact path="/COSC450/" element={<Home
          quiz={quiz}
          setQuiz={setQuiz}
        />} />
        <Route exact path="/COSC450/about" element={<About />} />
        <Route
          exact path="/COSC450/quizzes"
          element={
            <Quizzes
              quiz={quiz}
              setQuiz={setQuiz}
              total={total}
              setTotal={setTotal}
              step={step}
              setStep={setStep}
              selection={selection}
              setSelection={setSelection}
            />
          }
        />
        <Route exact path="/COSC450/results" element={<Results />} />
        <Route exact path="/COSC450/*" element={<NoPage />} />
      </Routes>
    </Switch>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
