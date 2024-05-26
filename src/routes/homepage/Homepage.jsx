import React from "react";
import Hero from "../../components/hero/Hero";
import Trend from "../../components/trend/Trend";
import Brand from "../../components/brand/Brand";
import TopProducts from "../../components/topProducts/TopProducts";
import Small from "../../components/small/Small";
import Recommended from "../../components/recommended/Recommended";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <Trend />
      <Brand />
      <TopProducts />
      <Small />
      <Recommended />
    </div>
  );
};

export default Homepage;
