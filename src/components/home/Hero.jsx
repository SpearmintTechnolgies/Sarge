import React from "react";
import heroCss from "./home.module.css";
import styled from "styled-components";
import Background from "/public/images/hero/background.png";

const Hero = () => {
  return (
    <div className={heroCss.heroContainer}>
      <div className={heroCss.logo}></div>
      <div className={heroCss.heroImage}></div>
      <div className={heroCss.bottomOverlay}>
        <div className={heroCss.brandTagLine}>
          <h1>Mobile startegy game</h1>
          <h2>Inspired by clash of clans</h2>
          {/* <button>Start Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
