import React, { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import service from "../assests/service.png";
import SubNavbar from "../components/common/SubNavbar";
import NavbarMain from "../components/common/NavbarMain";
import Footer from "../components/common/Footer";
import Services from "../components/core/Home/Services";
import MainCommon from "../components/common/MainCommon";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SubNavbar />
      <NavbarMain />
      <div className="relative flex justify-center items-center">
        <img
          src={service}
          alt="contact"
          className="w-full max-h-[85vh] object-cover"
        />

        <div className="absolute flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Our Services
          </h1>
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>
      <Services />
      <MainCommon />

      <Footer />
    </div>
  );
};

export default Service;
