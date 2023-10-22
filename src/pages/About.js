import "./About.css";

function About() {
  return (
    <div className="about-Con">
      <header>
        <h1>Quiz City</h1>
          <nav className="Navpage">
            <a href="/">Home</a>
            <a href="about">About</a>
            <a href="quizzes">Quizzes</a>
          </nav>
        <div className="light"></div>
      </header>

      <img src="brickwall.jpg" id="wall" alt="brick city wall"></img>
      
      <h1>About Us</h1>
      <div className="night"></div>
      
      <section>
        <section className="wrap">
          <div id="leftwin" class="win">
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
          <div id="rightwin" class="win">
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
          <div class="sill"></div>
        </section>

        <section className="wrapper2">
            <div id="leftwin2" class="win">
              <div class="shine"></div>
              <div class="shine"></div>
              <div class="handle"></div>
            </div>
            <div id="rightwin2" class="win">
              <div class="shine"></div>
              <div class="shine"></div>
            </div>
              <div class="sill2"></div>
          </section>
        </section>
    </div>
  );
}

export default About;
