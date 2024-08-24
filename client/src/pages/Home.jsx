import React from "react";
import Slider from "../components/core/Home/Swipper";
import AboutHome from "../components/core/Home/AboutHome";
import Company from "../components/core/Home/Company";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <div>
      <Slider />
      <Fade>
        <AboutHome />
      </Fade>
      <Company />
    </div>
  );
}

export default Home;
