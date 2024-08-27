import React from "react";
import { Routes, Route } from "react-router-dom";
import MilkHome from "../pages/milk/MilkHome";
import MilkNavbar from "../components/common/milk/MilkNavbar";
import SubNavbar from "../components/common/SubNavbar";
import MilkAbout from "../pages/milk/MilkAbout";
import ConstructorContact from "../pages/constructor/ConstructorContact";
import MilkContact from "../pages/milk/MilkContact";

const MilkProduct = () => {
  return (
    <div>
      <SubNavbar />

      <MilkNavbar />
      <Routes>
        <Route path="/home" element={<MilkHome />} />
        <Route path="/about" element={<MilkAbout />} />
        <Route path="/contact" element={<MilkContact />} />
      </Routes>
    </div>
  );
};

export default MilkProduct;
