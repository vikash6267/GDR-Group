import React from "react";
import { Routes, Route } from "react-router-dom";
import ConstructorHome from "../pages/constructor/ConstructorHome";
import ConstructorAbout from "../pages/constructor/ConstructorAbout";
import ConstructorContact from "../pages/constructor/ConstructorContact";
const MilkProduct = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<ConstructorHome />} />
        <Route path="/about" element={<ConstructorAbout />} />
        <Route path="/contact" element={<ConstructorContact />} />
      </Routes>
    </div>
  );
};

export default MilkProduct;
