import React from "react";
import Slider from "../components/core/Home/Swipper";
import AboutHome from "../components/core/Home/AboutHome";
import Company from "../components/core/Home/Company";
import { Fade } from "react-awesome-reveal";
import CanvasRotation from "../components/core/Home/CanvasRotation";

function Home() {
  return (
    <div>
      <Slider />
      <CanvasRotation />
      <Fade>
        <AboutHome />
      </Fade>
      <Company />
    </div>
  );
}

export default Home;
