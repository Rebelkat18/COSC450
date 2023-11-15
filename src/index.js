import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
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
    <HashRouter>
      <Routes>
        <Route path="/COSC450/" element={<Home
          quiz={quiz}
          setQuiz={setQuiz}
        />} />
        <Route path="/COSC450/about" element={<About />} />
        <Route
          path="/COSC450/quizzes"
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
        <Route path="/COSC450/results" element={<Results />} />
        <Route path="/COSC450/*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
