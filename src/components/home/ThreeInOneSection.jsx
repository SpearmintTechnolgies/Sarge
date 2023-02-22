import React from "react";
import threeInOneSection from "./home.module.css";
import Image from "next/image";
import searchAndDestroy from "public/images/threeInOneSection/Search-and-destroy.png";
import warrior from "public/images/threeInOneSection/Warriors.png";
import sargeUniverse from "/public/images/threeInOneSection/Sarge-universe.png";
import SargeGirl from "/public/images/threeInOneSection/SargeGirl.png";
const ThreeInOneSection = () => {
  return (
    <div className={threeInOneSection.threeInOneContainer}>
      <div>
        <h1>3 Games, 1 Universe</h1>
        <div className={threeInOneSection.imageContainer}>
          <img src={searchAndDestroy.src} alt="Search and destroy" />
          <img src={warrior.src} alt="warriors" />
          <img src={sargeUniverse.src} alt="Sarge universe" />
        </div>
        <p>
          We're a multi-genre mobile gaming franchise with a mission to turn
          your gaming hobby into an online income!
        </p>
        <div className={threeInOneSection.btnContainer}>
          <button>Start Now</button>
          <button>Know More</button>
        </div>
      </div>

      {/* claim your hero section */}
      <div className={threeInOneSection.ClaimContainer}>
        <h2>Claim your</h2>
        <h1>Sarge army hero</h1>
        <div className={threeInOneSection.imageContainer}>
          <img
            src={SargeGirl.src}
            alt="SargeGirl"
            className={threeInOneSection.image1}
          />
          <img
            src={SargeGirl.src}
            alt="SargeGirl"
            className={threeInOneSection.image2}
          />
          <img
            src={SargeGirl.src}
            alt="SargeGirl"
            className={threeInOneSection.image3}
          />
        </div>
        <p>Connect you wallet and check if you can mint a FREE NFT</p>
        <div className={threeInOneSection.btnContainer}>
          <button>Start Now</button>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default ThreeInOneSection;
