import React from "react";
import RKSMainHome from "../components/RKS Home/RKSHome";
import { Route, Routes } from "react-router-dom";

function RKSHome() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/home" element={<RKSMainHome />} />
        {/* <Route path="/contact" element={<ContactUs />} />
    <Route path="/about" element={<AboutUsPage />} /> */}
      </Routes>
    </div>
  );
}

export default RKSHome;
