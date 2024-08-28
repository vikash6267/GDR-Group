import React, { useEffect } from "react";
import Slider from "../../components/core/Home/Swipper";
import MilkProduct from "../../components/milk/MilkProduct";
import Company from "../../components/milk/Company";
import WhyUs from "../../components/milk/WhyUs";
import ContactBanner from "../../components/milk/ContactBanner";
import Services from "../../components/milk/Services";
// import Services from "../../components/core/Home/Services";

const MilkHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Slider />
      <Services />
      <ContactBanner />
      <MilkProduct />
      <Company />
      <WhyUs />
    </div>
  );
};

export default MilkHome;
