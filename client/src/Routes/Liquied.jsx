import React from "react";
import { Routes, Route } from "react-router-dom";
import SubNavbar from "../components/common/SubNavbar";
import Footer from "../components/common/Footer";
import LequiedNavbar from "../components/common/liqued/LequiedNavbar";
import LequiedHome from "../pages/lequied/LequiedHome";
import LequiedAbout from "../pages/lequied/LequiedAbout";
import LequiedContact from "../pages/lequied/LequiedContact";

const Liquied = () => {
  return (
    <div>
      <SubNavbar />

      <LequiedNavbar />
      <Routes>
        <Route path="/home" element={<LequiedHome />} />
        <Route path="/about" element={<LequiedAbout />} />
        <Route path="/contact" element={<LequiedContact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Liquied;
