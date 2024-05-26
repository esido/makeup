import React from "react";
import "./Recommended.css";

const Recommended = () => {
  return (
    <section className="recommended">
      <div className="container">
        <div className="recommended-wrapper">
          <div className="recommended-block">
            <img
              className="recommended-image"
              width={"320px"}
              height={"260px"}
              src="https://images.ctfassets.net/eoaaqxyywn6o/3Hqi2hsaVdB689SbuBJCpj/3ff0ff24026bc3bc68700889eb6cdf65/PL-Carousel.gif"
              alt=""
            />
            <div className="recommended-block-content">
              <h3 className="recommended-block-content_title">
                Which smoky eye are you?
              </h3>
              <p className="recommended-block-content_message">
                Introducing Smoky, the new By BEAUTY BAY palette with endless
                possibilities
              </p>
              <div className="recommended-block-content-btn">
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
          <div className="recommended-block">
            <img
              className="recommended-image"
              width={"320px"}
              height={"260px"}
              src="https://images.ctfassets.net/eoaaqxyywn6o/3UGhPXpta3sr3Vy7d1cI5z/0747cb9190499852b2af349270c21896/Story_2.jpg"
              alt=""
            />
            <div className="recommended-block-content">
              <h3 className="recommended-block-content_title">
                This way for radiant skin
              </h3>
              <p className="recommended-block-content_message">
                Boost your base with these By BEAUTY BAY blushers
              </p>
              <div className="recommended-block-content-btn">
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
          <div className="recommended-block">
            <img
              className="recommended-image"
              width={"320px"}
              height={"260px"}
              src="https://images.ctfassets.net/eoaaqxyywn6o/64mKVUSfvcoYeildTcQYNr/fa1b0e81724ee9106367a35a8f377f15/PL_Carousel.jpg"
              alt=""
            />
            <div className="recommended-block-content">
              <h3 className="recommended-block-content_title">Get a grip</h3>
              <p className="recommended-block-content_message">
                With the new By BEAUTY BAY Jelly Grip Hydrating Primer​
              </p>
              <div className="recommended-block-content-btn">
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
          <div className="recommended-block">
            <img
              className="recommended-image"
              width={"320px"}
              height={"260px"}
              src="https://images.ctfassets.net/eoaaqxyywn6o/45qEpt4CqKme69GhuYTDhU/d7e154d431aeb85bef6e69dd8fe7fe28/Story_1_-spf.jpg"
              alt=""
            />
            <div className="recommended-block-content">
              <h3 className="recommended-block-content_title">
                Your new SPF BFF
              </h3>
              <p className="recommended-block-content_message">
                Protect and soothe your skin this spring with the By BEAUTY SPF
                50 Face Lotion
              </p>
              <div className="recommended-block-content-btn">
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

export default Recommended;
