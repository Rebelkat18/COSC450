import "./About.css";

function About() {
  return (
    <div>
      <header>
        <h1 className="Logo">Quiz City</h1>
        <nav className="Navpage">
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>
      <div className="container">
        <h1 id="Who">About Us</h1>
        <div id="Window"></div>
        <div id ="BpW"></div>
        <div id ="TpW"></div>
      </div>
    </div>
  );
}

export default About;
