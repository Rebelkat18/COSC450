import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Quizzes from "./pages/Quizzes";
import Results from "./pages/Results";
import "./App.css";

export default function App() {
    const [total, setTotal] = useState(undefined);
    const [step, setStep] = useState(0);
    const [selection, setSelection] = useState([]);
    const [quiz, setQuiz] = useState(0);

    return (
        <Router>
            <Routes>
                <Route path="/COSC450/" element={<Home
                    quiz={quiz}
                    setQuiz={setQuiz}
                    total={total}
                    setTotal={setTotal}
                    step={step}
                    setStep={setStep}
                    selection={selection}
                    setSelection={setSelection}
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
                <Route path="/COSC450/menu" element={<Menu
                    quiz={quiz}
                    setQuiz={setQuiz}
                    total={total}
                    setTotal={setTotal}
                    step={step}
                    setStep={setStep}
                    selection={selection}
                    setSelection={setSelection} />} />
            </Routes>
        </Router>
    );
}
