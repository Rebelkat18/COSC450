import "./About.css";

function About() {
  return (
    <div>
      <header className="aboutHead">
        <h1 className="Logo">Quiz City</h1>
        <nav className="Navpage">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>
    
      <h1 id="Who">About Us</h1>
    
    <section className="All">
      <section className="wrapper">
        <div id="Window"></div>
        <div id="leftwin" class="win">
          <div class="shine"></div>
          <div class="shine"></div>
        </div>
        <div id="rightwin" class="win">
          <div class="shine"></div>
          <div class="shine"></div>
        </div>
        
      </section>

      <section className="wrapper2">
          <div id="Window2"></div>
          <div id="leftwin2" class="win">
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="handle"></div>
          </div>
          <div id= "rightwin2" class="win">
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
        </section>
        </section>
      
    </div>
  );
}

export default About;
