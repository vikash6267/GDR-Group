import React from "react";
import Slider from "../../components/core/Home/Swipper";
import LiquiedButtomSection from "../../components/liquied/LiquiedButtomSection";
import LiquiedWhy from "../../components/liquied/LiquiedWhy";
import ContactBanner from "../../components/milk/ContactBanner";

const LequiedHome = () => {
  return (
    <div>
      <Slider />
      <LiquiedButtomSection />
      <ContactBanner />
      <LiquiedWhy />
    </div>
  );
};

export default LequiedHome;
