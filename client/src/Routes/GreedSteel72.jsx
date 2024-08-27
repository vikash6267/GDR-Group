import React from "react";
import { Routes, Route } from "react-router-dom";
import GreedSteelNavbar from "../components/common/greedsteel/GreedSteelNavbar";
import SubNavbar from "../components/common/SubNavbar";

import GreedSteelHome from "../pages/greedsteel/GreedSteelHome";
import GreedSteelAbout from "../pages/greedsteel/GreedSteelAbout";
import GreedSteelContact from "../pages/greedsteel/GreedSteelContact";
import Footer from "../components/common/Footer";

const GreedSteel72 = () => {
  return (
    <div>
      <SubNavbar />

      <GreedSteelNavbar />
      <Routes>
        <Route path="/home" element={<GreedSteelHome />} />
        <Route path="/about" element={<GreedSteelAbout />} />
        <Route path="/contact" element={<GreedSteelContact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default GreedSteel72;
