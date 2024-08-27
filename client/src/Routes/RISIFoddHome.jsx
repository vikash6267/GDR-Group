import React from "react";
import { Route, Routes } from "react-router-dom";
import RISIHomeFood from "../components/Home Food/RISIHomeFood";
import ContactUs from "../components/Home Food/ContactRISI";
import AboutUsPage from "../components/Home Food/AboutPage";

function RISIFoddHome() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<RISIHomeFood />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default RISIFoddHome;
