import React from "react";
import homecss from "../home/home.module.css";
import ProfitIcon from "public/images/Sargehero/profit-icon.png";
import ClaimIcon from "public/images/Sargehero/claim-icon.png";
import GainIcon from "public/images/Sargehero/gain-icon.png";
const BecomeSargeHero = () => {
  return (
    <div className={homecss.SargeHeroContainer}>
      <h2>Become A</h2>
      <h1>Sarge army hero</h1>
      <div className={homecss.sargeHeroImage}></div>
      <div className={homecss.sargeCharacterstics}>
        <div>
          <img src={ProfitIcon.src} alt="profit-icon" />
          <div>become A% OF OUR PROFITS from the sarge universe</div>
        </div>
        <div>
          <img src={ClaimIcon.src} alt="claim-icon" />
          <div>claim a free ticket to sargeon</div>
        </div>
        <div>
          <img src={GainIcon.src} alt="gain-icon" />
          <div>claim a free ticket to sargeon</div>
        </div>
      </div>
    </div>
  );
};

export default BecomeSargeHero;
