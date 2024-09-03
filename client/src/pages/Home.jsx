import React, { useEffect } from "react";
import Slider from "../components/core/Home/Swipper";
import AboutHome from "../components/core/Home/AboutHome";
import Company from "../components/core/Home/Company";
import WhyUs from "../components/core/Home/WhyUs";
import Services from "../components/core/Home/Services";
import { Fade } from "react-awesome-reveal";
import CommanText from "../components/core/Home/CommanText";
import TagCloudWithDetails from "../components/core/Home/CanvasRotation";
// import Gallery from "../components/core/Home/Gallery";
import Project from "../components/core/Home/Project";
import Process from "../components/core/Home/Process";
import SubNavbar from "../components/common/SubNavbar";
// import SubNav2 from "../components/common/SubNav2";
import NavbarMain from "../components/common/NavbarMain";
import Footer from "../components/common/Footer";
import HomeQuote from "../components/core/Home/HomeQuote";
import Blog from "../components/core/Home/Blog";
import ContactBanner from "../components/milk/ContactBanner";
// import GetInTouch from "../components/core/Home/GetInTouch";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SubNavbar />
      {/* <SubNav2 /> */}
      <NavbarMain />
      <Slider />

      <CommanText
        text={
          "If you want to join & Invest wtih us you are welcome to GDR group"
        }
      />
      <TagCloudWithDetails />
      <Fade>
        <AboutHome />
      </Fade>
      <Services />
      <Company />
      <ContactBanner />
      {/* <Gallery /> */}
      <Project />
      <Process />
      {/* <GetInTouch /> */}
      <WhyUs />
      <Blog />
      <HomeQuote />
      <Footer />
    </div>
  );
}

export default Home;
