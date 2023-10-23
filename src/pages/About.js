import "./About.css";

function About() {
  return (
    <div className="about-Con">
      <section class="des">
        <img src="brickwall.jpg" id="wall" alt="brick city wall"></img>
        <div class="light"></div>
        <div class="night"></div>
      </section>
      
      <h1>About Us</h1>
      <header>
        <h1>Quiz City</h1>
          <nav className="Navpage">
            <a href="/">Home</a>
            <a href="about">About</a>
            <a href="quizzes">Quizzes</a>
          </nav>
      </header>
      
      {/* Window on left */}

      <section class="window">
        <section class="wrap">
          <section class="lW">
            <div class="shine"></div>
            <div class="shine"></div>
            </section>
          <section class="rW">
            <div class="shine"></div>
            <div class="shine"></div>
          </section>
          <div class="sill"></div>
          <img src="Kat.png" id="kat" alt="Kat C."></img>
        </section>

   {/* Window on the right. */}

        <section class="window">
            <section class="w2">
              <section class="lW">
                <div class="shine"></div>
                <div class="shine"></div>
              </section>
            <section class="rW">
                <div class="shine"></div>
                <div class="shine"></div>
            </section>
                <div class="sill"></div>
                <img src="Robin.jpg" id="robin" alt="Robin A."></img>
        </section>
        </section>
        </section>
    </div>
  );
}

export default About;
