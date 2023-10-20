import "./About.css";

function About() {
  return (
    <div className="about-Container">
      <header>
        <h1 className="Logo">Quiz City</h1>
        <nav className="Navpage">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
        <div id="lightFall"></div>
      </header>
      <h1 id="Who">About Us</h1>

      <img src="brickwall.jpg" id="wall" alt="brick city wall"></img>
      <div id="nightFall"></div>
      <section className="All">
        <section className="wrapper">
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
            <div id= "rightwin2" class="win">
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
