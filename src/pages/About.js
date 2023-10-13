import "./About.css";

function About() {
  return (
    <div>
      <header>
        <h1 className="Logo">Quiz City</h1>
        <nav className="Navpage">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>
    
    <section>
      <h1 id="Who">About Us</h1>
      </section>

      <body>
      <div class="wrapper">
        <div id="Window"></div>
        <div id="leftwin" class="win"></div>
        <div id="rightwin" class="win"></div>
      </div>

      <div class="wrapper2">
          <div id="Window2"></div>
          <div id="leftwin2" class="win"></div>
          <div id= "rightwin2" class="win"></div>
        </div>
      </body>

      
    </div>
  );
}

export default About;
