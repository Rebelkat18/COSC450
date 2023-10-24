import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Quizzes from "./pages/Quizzes";
import Results from "./pages/Results";
import { useState } from "react";

export default function App() {
  const [total, setTotal] = useState(0);
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState([0]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="quizzes"
          element={
            <Quizzes
              total={total}
              setTotal={setTotal}
              step={step}
              setStep={setStep}
              selections={selections}
              setSelections={setSelections}
            />
          }
        />
        <Route path="results" element={<Results />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
      <App/>
    </StrictMode>
);
