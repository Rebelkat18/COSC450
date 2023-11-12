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
      </header>
      
      {/* Title on page. */}
      <section class="text">
        <div class="ab">About Us</div>
        <div class={"col"}>
          <h2 class = "K" style={{float: "left", color: "aliceblue", fontSize: 40}}>Kat</h2>
          <h2 class = "Rob" style={{float: "right", color: "aliceblue", fontSize: 40}}>Robin</h2>
        </div>
      
      </section>
      
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
          <div class="sill"><div class="shad"></div>
          </div>
          <div class="bg-img"></div>
          <p className="katDes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.</p>

        </section>

   {/* Window on the right. */}

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
                <div class="bg-img2"></div>
                <p className="robDes">Hi! I'm Robin, a senior at Frostburg State University, class of 2024! 
                  A fun fact about me, before I decided to major in computer science I planned on becoming an art major;
                 art is one of my greatest passions, specifically digital art, alongside coding of course. I also enjoy playing video games, 
                 watching anime, video editing, and recently dabbled into making mods for games! Working on this project has been a fun experience,
                 and I've enjoyed the challenges that came with it. I've definitely learned a lot.</p>
        </section>
        </section>

     <footer>
        <div class="night"></div>
     </footer>
    </div>
  );
}

export default About;
