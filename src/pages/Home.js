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
    <div>
      <header>
        <h1 class="Logo">Quiz City</h1>
        <nav class="Navpage">
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>
      <section>
        <img src="204.jpg" id="city" alt="Background of cities."></img>
      </section>
    </div>
  );
}

export default Home;
