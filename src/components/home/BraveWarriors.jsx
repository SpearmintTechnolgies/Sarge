import React from "react";
import homecss from "./home.module.css";
import BraveGirl from "public/images/braveWarriors/Bravegirl.png";
const BraveWarriors = () => {
  return (
    <div className={homecss.BraveWarriorsContainer}>
      <h1>Brave Warriors</h1>
      <div className={homecss.BraveWarriorsSlider}>
        <img src={BraveGirl.src} alt="SargeGirl" className={homecss.image1} />
        <img src={BraveGirl.src} alt="SargeGirl" className={homecss.image2} />
        <img src={BraveGirl.src} alt="SargeGirl" className={homecss.image3} />
      </div>
    </div>
  );
};

export default BraveWarriors;
