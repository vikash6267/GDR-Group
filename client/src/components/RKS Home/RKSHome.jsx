import React from 'react'
import RKSHomeNavbar from './Navbar'
import Subnavbar from "../common/SubNavbar"
import Footer from "../common/Footer"
import MainSection from './MainSections'
import { PropertiesList } from './PropertiesSlider'
import FeaturesSection from './FetureSection'
import TestimonialSection from './Testominals'
import AboutSection from './AboutSection'

function RKSHome() {
  return (
    <div>

        <Subnavbar />
        <RKSHomeNavbar />
        <MainSection />
        <PropertiesList />
        <AboutSection />
        <FeaturesSection />
        <TestimonialSection />


        <Footer />
    </div>
  )
}

export default RKSHome