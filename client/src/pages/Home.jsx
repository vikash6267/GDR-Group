import React from "react";
import Slider from "../components/core/Home/Swipper";
import AboutHome from "../components/core/Home/AboutHome";
import Company from "../components/core/Home/Company";
import Services from "../components/core/Home/Services";
import { Fade } from "react-awesome-reveal";
import CommanText from "../components/core/Home/CommanText";
import CanvasRotation from "../components/core/Home/CanvasRotation";
import Gallery from "../components/core/Home/Gallery";

function Home() {
  return (
    <div>
      <Slider />
      <CanvasRotation />
      <Fade>
        <AboutHome />
      </Fade>
      <Services />
      <CommanText text={"This is dummy text"} />
      <Company />
      <Gallery />
    </div>
  );
}

export default Home;
