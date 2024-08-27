import React from "react";
import Slider from "../../components/core/Home/Swipper";
import MilkProduct from "../../components/milk/MilkProduct";
import Company from "../../components/milk/Company";
import WhyUs from "../../components/milk/WhyUs";
import ContactBanner from "../../components/milk/ContactBanner";
import Services from "../../components/milk/Services";
// import Services from "../../components/core/Home/Services";

const MilkHome = () => {
  return (
    <div>
      <Slider />
      <Services />
      <MilkProduct />
      <Company />
      <ContactBanner />
      <WhyUs />
    </div>
  );
};

export default MilkHome;
