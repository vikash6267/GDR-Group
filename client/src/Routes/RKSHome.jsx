import React from "react";
import RKSMainHome from "../components/RKS Home/RKSHome";
import { Route, Routes } from "react-router-dom";
import RksAbout from "../components/RKS Home/RksAbout";
import RksContact from "../components/RKS Home/RksContact";

function RKSHome() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/home" element={<RKSMainHome />} />
        <Route path="/contact" element={<RksContact />} />
        <Route path="/about" element={<RksAbout />} />
      </Routes>
    </div>
  );
}

export default RKSHome;
