import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <header>
        <h1 class="Logo">Quiz City</h1>
        <nav class="Navpage">
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>
    </div>
  );
}

export default Home;

