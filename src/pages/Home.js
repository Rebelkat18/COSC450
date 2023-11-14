import React from "react";
import "./Home.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { EffectFade, Mousewheel } from 'swiper/modules';
// import 'swiper/css/effect-fade';
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";


function Home(props) {
  const nav = useNavigate();

  window.addEventListener("scroll", () => {
    document.body.style.setProperty(
      "--scroll",
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  });

  const set = (value) => {
    props.setQuiz(value);
    nav("/quizzes");
  }

  return (
    <div className="home-Container">
      <header className="head">
        <h1>Quiz City</h1>
        <nav className="Navpage">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="quizzes">Quizzes</a>
        </nav>
      </header>

      <ButtonGroup className="btn2">
          <button className="butt" onClick={() => set(0)}>
            {" "}
            What Color are you? {" "}
          </button>
          <button className="butt" onClick={() => set(9)}>
            {" "}
            What Friend are you? {" "}
          </button>
          </ButtonGroup>

      <div>
        <img src="204.jpg" id="city" alt="Background of cities."></img>
    </div>

      {/* <Swiper
        direction={'horizontal'}
        mousewheel={true}
        modules={[EffectFade, Mousewheel]}
        slidesPerView={1}
        effect={'fade'}
      >
        <SwiperSlide>
          <button onClick={() => console.log("clicked")}>
            {" "}
            1{" "}
          </button>
        </SwiperSlide>
        <SwiperSlide><button onClick={() => console.log("clicked")}>
          {" "}
          2{" "}
        </button></SwiperSlide>
        <SwiperSlide><button onClick={() => console.log("clicked")}>
          {" "}
          3{" "}
        </button></SwiperSlide>
        <SwiperSlide><button onClick={() => console.log("clicked")}>
          {" "}
          4{" "}
        </button></SwiperSlide>
      </Swiper> */}

    </div >
  );
}

export default Home;
