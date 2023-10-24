import "./About.css";

function About() {
  return (
    <div className="about-Con">
      <section>
        <img src="brickwall.jpg" id="wall" alt="brick city wall"></img>
        <div class="light"></div>
        <div class="night"></div>
        <div class="bot"></div>
      </section>
      
      {/* Title on page. */}
      <div>
        <h1>About Us</h1>
      </div>
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
          <div class="sill"><div class="shad"></div></div>
          <img src="Kat.png" id="kat" alt="Kat C."></img>
          <p className="katDes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.</p>
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
                <div class="sill"><div class="shad"></div>
                </div>
                <img src="Robin.jpg" id="robin" alt="Robin A."></img>
                <p className="robDes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.</p>
        </section>
        </section>
        </section>

     
    </div>
  );
}

export default About;
