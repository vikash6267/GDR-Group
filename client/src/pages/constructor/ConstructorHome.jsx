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
const ConstructorHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SubNavbar />
      <ConstructionNavbar />
      <Swipper />
      <Building />
      <Company />
      <ContactBanner />
      <Expert />
      <Partners />
      <TalkToUs />
      <Footer />
    </div>
  );
};

export default ConstructorHome;
