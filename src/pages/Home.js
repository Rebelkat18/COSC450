import React from "react";
import "./Home.css";

function Home() {
  window.addEventListener("scroll", () => {
    document.body.style.setProperty(
      "--scroll",
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  });

  return (
    <div className="home-Container">
      <header className="head">
        <h1>Quiz City</h1>
        <nav className="Navpage">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>
      
      <div>
        <img src="204.jpg" id="city" alt="Background of cities."></img>
      </div>
    </div>
  );
}

export default Home;
