import "./NoPage.css";
const NoPage = () => {
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
      <div className="Main">
        <h1> Error 404 </h1>
        <p> Please return to the homepage using the top navigation buttons. </p>
      </div>
    </div>
  );
};

export default NoPage;
