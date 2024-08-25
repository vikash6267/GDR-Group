import React from "react";
import Slider from "../components/core/Home/Swipper";
import AboutHome from "../components/core/Home/AboutHome";
import Company from "../components/core/Home/Company";
import Services from "../components/core/Home/Services";
import { Fade } from "react-awesome-reveal";
import CommanText from "../components/core/Home/CommanText";
import TagCloudWithDetails from "../components/core/Home/CanvasRotation";
import Gallery from "../components/core/Home/Gallery";
import Project from "../components/core/Home/Project";
import Process from "../components/core/Home/Process";

function Home() {
  return (
    <div>
      <Slider />
      <TagCloudWithDetails />
      <Fade>
        <AboutHome />
      </Fade>
      <Services />
      <CommanText
        text={
          "If you want to join us and invest then you are welcome to GDR Group"
        }
      />
      <Company />
      <Gallery />
      <Project />
      <Process />
    </div>
  );
}

export default Home;
