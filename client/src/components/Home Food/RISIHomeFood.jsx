import React, { useEffect } from "react";
import RISINavbar from "./Navbar";
import SubNavbar from "../common/SubNavbar";
import HeroSlider from "./Slider";
import AboutSection from "./About";
import ProdutsHomeFood from "./ProdutsHomeFood";
import ItemList from "./OtherItems";
import SecondSection from "./SectionSecond";
import WhyChooseRISI from "./WhyChooseUs";
import Footer from "../common/Footer";
import ContactBanner from "../../components/milk/ContactBanner";
function RISIHomeFood() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SubNavbar />
      <RISINavbar />
      <HeroSlider />
      <AboutSection />
      <ContactBanner />
      <ProdutsHomeFood />
      <SecondSection />
      <ItemList />
      <WhyChooseRISI />
      <Footer />
    </div>
  );
}

export default RISIHomeFood;
