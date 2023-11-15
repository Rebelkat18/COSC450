import "./About.css";
function About() {


  return (
    <div className="about-Con">
      <header>
        <h1>Quiz City</h1>
        <nav className="Navpage">
          <a href="/COSC450/">Home</a>
          <a href="/COSC450/about">About</a>
          <a href="/COSC450/quizzes">Quizzes</a>
        </nav>
      </header>

      {/* Title on page. */}
      <section class="text">
        <div class="ab">About Us</div>
        <div class="col">
          <div class="K">
            <span>Ka</span>
            <span>i</span>
            <span>t</span>
            <span>lyn</span>
          </div>
          <div
            class="Rob">
           <span>in</span> 
           <span>Rob</span>
          </div>
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
          <div class="sill">
            <div class="shad"></div>
          </div>
          <div class="bg-img"></div>
          <p className="katDes">Hi! I'm Kat, a senior at Frostburg State University.
            I major in Computer Science because I love programming just about anything.
            During my internship over the summer, I discovered that I really enjoy web development.
            Working on this project has given me some good experience in web developement.</p>

        </section>

        {/* Window on the right. */}
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
          <div class="sill">
            <div class="shad"></div>
          </div>
          <div class="bg-img2"></div>
          <p className="robDes">
            Hi! I'm Robin, a senior at Frostburg State University, class of
            2024! A fun fact about me, before I decided to major in computer
            science I planned on becoming an art major; art is one of my
            greatest passions, specifically digital art, alongside coding of
            course. Working on this project has been a fun experience, and I've enjoyed the
            challenges that came with it. I've definitely learned a lot.
          </p>
        </section>
      </section>

      <footer>
        <div class="night"></div>
      </footer>
    </div>
  );
}

export default About;
