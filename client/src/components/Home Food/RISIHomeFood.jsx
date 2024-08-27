import React from 'react'
import RISINavbar from './Navbar'
import SubNavbar from "../common/SubNavbar";
import HeroSlider from './Slider';
import AboutSection from './About';
import ProdutsHomeFood from './ProdutsHomeFood';
import ItemList from './OtherItems';
import SecondSection from './SectionSecond';
import WhyChooseRISI from './WhyChooseUs';

function RISIHomeFood() {
  return (
    <div>
      <SubNavbar />
      <RISINavbar />
      <HeroSlider />
      <AboutSection />
      <ProdutsHomeFood />
      <SecondSection />
      <ItemList />
      <WhyChooseRISI />
    </div>
  )
}

export default RISIHomeFood