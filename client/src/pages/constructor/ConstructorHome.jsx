import React, { useEffect } from "react";
import SubNavbar from "../../components/common/SubNavbar";
import ConstructionNavbar from "../../components/common/construction/ConstructionNavbar";
import Footer from "../../components/common/Footer";
import Swipper from "../../components/constructor/Swipper";
import Building from "../../components/constructor/Building";
import Company from "../../components/constructor/Services";
import Expert from "../../components/constructor/Expert";
import Partners from "../../components/constructor/Partner";
import TalkToUs from "../../components/constructor/TalkToUs";
import ContactBanner from "../../components/milk/ContactBanner";
import { Helmet } from "react-helmet";
const ConstructorHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home - New RK Construction. </title>
        <meta
          name="description"
          content="GDR Group 72: A dynamic conglomerate specializing in Agriculture, Dairy, Farm Land, and Commercial Property with a mission to drive growth in rural communities through innovation and sustainability"
        />
      </Helmet>
      <SubNavbar />
      <ConstructionNavbar />
      <Swipper />
      <Building />
      <Company />
      <ContactBanner />
      {/* <Expert /> */}
      <Partners />
      <TalkToUs />
      <Footer />
    </div>
  );
};

export default ConstructorHome;
