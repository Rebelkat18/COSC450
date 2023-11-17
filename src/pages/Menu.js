import "./Menu.css";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="container">
      <header>
        <h1>Quiz City</h1>
        <nav className="Navpage">
          <Link to="/COSC450/">Home</Link>
          <Link to="/COSC450/about">About</Link>
          <Link to="/COSC450/menu">Quizzes</Link>
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
