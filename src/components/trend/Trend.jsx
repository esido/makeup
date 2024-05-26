import React from "react";
import "./Trend.css";

const Trend = () => {
  return (
    <section className="trend">
      <div className="container">
        <div className="trend-wrapper">
          <div className="trend-block">
            <img
              className="trend-image"
              width={"440px"}
              src="https://images.ctfassets.net/eoaaqxyywn6o/4FUZGa67ZaOqtjhXPiR1vj/33847addd23900e454228b210ef09b98/Trading_Trio-UK.jpeg"
              alt=""
            />
            <div className="trend-block-content">
              <h3 className="trend-block-content_title">
                Minimal effort, maximum glow
              </h3>
              <p className="trend-block-content_message">
                Prepare for radiant results with the By BEAUTY BAY Liquid
                Highlighters
              </p>
              <div className="trend-block-content-btn">
                <span>SHOP NOW</span>
                <svg
                  width="4"
                  height="12"
                  viewBox="0 0 4 12"
                  class="cta-label__link__icon"
                  style={{ fill: "rgb(0, 0, 0)" }}
                >
                  <path d="M4,6v0l-4,6v0v-12v0z" fill-opacity="1"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="trend-block">
            <img
              className="trend-image"
              width={"440px"}
              src="https://images.ctfassets.net/eoaaqxyywn6o/1MT6RjAqNOxjX0mPzbgyZD/d0de538a559b3d66fd59c5a417105298/Trading_Trio.jpeg"
              alt=""
            />
            <div className="trend-block-content">
              <h3 className="trend-block-content_title">Me-time musts</h3>
              <p className="trend-block-content_message">
                Make time to unwind with these new bodycare essentials
              </p>
              <div className="trend-block-content-btn">
                <span>SHOP NOW</span>
                <svg
                  width="4"
                  height="12"
                  viewBox="0 0 4 12"
                  class="cta-label__link__icon"
                  style={{ fill: "rgb(0, 0, 0)" }}
                >
                  <path d="M4,6v0l-4,6v0v-12v0z" fill-opacity="1"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="trend-block">
            <img
              className="trend-image"
              width={"440px"}
              src="https://images.ctfassets.net/eoaaqxyywn6o/1vjJPtV6aolqvDAYy7ljja/95e815be8ecfe54742b04bf26cd8aaae/Trading_Trio_Full_Face.jpg"
              alt=""
            />
            <div className="trend-block-content">
              <h3 className="trend-block-content_title">
                TikTok trending and totally worth it
              </h3>
              <p className="trend-block-content_message">
                It's time to haul your FYP faves
              </p>
              <div className="trend-block-content-btn">
                <span>SHOP NOW</span>
                <svg
                  width="4"
                  height="12"
                  viewBox="0 0 4 12"
                  class="cta-label__link__icon"
                  style={{ fill: "rgb(0, 0, 0)" }}
                >
                  <path d="M4,6v0l-4,6v0v-12v0z" fill-opacity="1"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trend;
