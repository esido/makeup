import React from "react";
import "./Small.css";

const Small = () => {
  const iconStyle = { fill: "rgb(255, 255, 255)" };
  return (
    <div className="small">
      <div className="container">
        <div className="small-wrapper">
          <div className="small-wrapper__block-line"></div>
          <div className="small-wrapper__block">
            <img
              width={"425px"}
              src="https://images.ctfassets.net/eoaaqxyywn6o/34leGZepCWqy85QuTPqUf9/824fdb08346e60f790e2b061e6290cf3/Logo_Slim_Banner__1_.jpeg"
              alt=""
            />
          </div>
          <div className="small-wrapper__block-line"></div>
        </div>
        <p className="small-content-text">
          Looking for five-star formulas, minus the price tag? From skincare
          essentials to makeup must-haves and results-driven haircare, By BEAUTY
          BAY has everything you need to discover your next best obsession.
        </p>
        <button className="small-content-btn">
          Shop Now
          <svg
            width="4"
            height="12"
            viewBox="0 0 4 12"
            class="cta-label__link__icon"
            style={iconStyle}
          >
            <path d="M4,6v0l-4,6v0v-12v0z" fill-opacity="1"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Small;
