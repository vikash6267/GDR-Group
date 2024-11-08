import React, { useEffect } from "react";
import Slider from "../../components/core/Home/Swipper";
import MilkProduct from "../../components/milk/MilkProduct";
import Company from "../../components/milk/Company";
import WhyUs from "../../components/milk/WhyUs";
import ContactBanner from "../../components/milk/ContactBanner";
import Services from "../../components/milk/Services";
import { Helmet } from "react-helmet";
import Swipper2 from "../../components/core/Home/Swipper2";
// import Services from "../../components/core/Home/Services";

const MilkHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home - Nirvdit All Making Products Private Limited</title>
        <meta
          name="description"
          content="GDR Group 72: A dynamic conglomerate specializing in Agriculture, Dairy, Farm Land, and Commercial Property with a mission to drive growth in rural communities through innovation and sustainability"
        />
      </Helmet>
      <Swipper2 />
      <Services />
      <ContactBanner />
      <MilkProduct />
      <Company />
      <WhyUs />
    </div>
  );
};

export default MilkHome;
