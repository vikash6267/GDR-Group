import React from "react";
import { Routes, Route } from "react-router-dom";
import ConstructorHome from "../pages/constructor/ConstructorHome";
import ConstructorAbout from "../pages/constructor/ConstructorAbout";
import ConstructorContact from "../pages/constructor/ConstructorContact";
const Constroctor = () => {
  return (
    <div>
      <Routes>
        <Route path="/construction/home" element={<ConstructorHome />} />
        <Route path="/construction/about" element={<ConstructorAbout />} />
        <Route path="/construction/contact" element={<ConstructorContact />} />
      </Routes>
    </div>
  );
};

export default Constroctor;
