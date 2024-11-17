import React from "react";
import "./Intro.css";
import Img from "./image-omelette.jpeg";

const Intro = () => {
  return (
    <div className="intro">
      <img src={Img} className="OmeImg" alt="omelette-img" />

      <p className="Tit">Simple Omelette Recipe</p>
      <p className="IntText">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
};

export default Intro;
