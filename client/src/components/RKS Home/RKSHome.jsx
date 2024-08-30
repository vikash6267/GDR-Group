import React, { useEffect } from "react";
import RKSHomeNavbar from "./Navbar";
import Subnavbar from "../common/SubNavbar";
import Footer from "../common/Footer";
import MainSection from "./MainSections";
import { PropertiesList } from "./PropertiesSlider";
import { Property } from "./Property";
import FeaturesSection from "./FetureSection";
import TestimonialSection from "./Testominals";
import AboutSection from "./AboutSection";
import ContactBanner from "../milk/ContactBanner";

function RKSHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Subnavbar />
      <RKSHomeNavbar />
      <MainSection />
      <PropertiesList />
      <Property />
      <ContactBanner />
      <AboutSection />
      <FeaturesSection />
      <TestimonialSection />

      <Footer />
    </div>
  );
}

export default RKSHome;
