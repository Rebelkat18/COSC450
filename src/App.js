import React from "react";
import "./App.css";


function App() {
  
  window.addEventListener("scroll", () => 
  {document.body.style.setProperty('--scroll', window.scrollY/
   (document.body.offsetHeight - window.innerHeight))
  }
  );
   

  return ( 
    <div>
      <header>
        <h1 class="Logo">Quiz City</h1>
        <nav class="Navpage">
          <a href="/#">Home</a>
          <a href="/#">About</a>
          <a href="/#">Quizzes</a>
        </nav>
      </header>
      <section>
        <img src="204.jpg" id="city" alt="Background of cities."></img>
      </section>
      </div>
      );
    }

export default App;

