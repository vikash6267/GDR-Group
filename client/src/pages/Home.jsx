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
import SubNavbar from "../components/common/SubNavbar";
import SubNav2 from "../components/common/SubNav2";
import NavbarMain from "../components/common/NavbarMain";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <div>
      <SubNavbar />
      <SubNav2 />
      <NavbarMain />
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
      <Footer />
    </div>
  );
}

export default Home;
