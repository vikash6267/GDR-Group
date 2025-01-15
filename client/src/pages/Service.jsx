import React, { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import service from "../assests/service.png";
import SubNavbar from "../components/common/SubNavbar";
import NavbarMain from "../components/common/NavbarMain";
import Footer from "../components/common/Footer";
import Services from "../components/core/Home/Services";
import MainCommon from "../components/common/MainCommon";
import { Helmet } from "react-helmet";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> GDR Group - Services</title>
        <meta
          name="description"
          content="GDR Group 72: A dynamic conglomerate specializing in Agriculture, Dairy, Farm Land, and Commercial Property with a mission to drive growth in rural communities through innovation and sustainability"
        />
      </Helmet>
      <SubNavbar />
      <NavbarMain />
      <div className="relative flex justify-center items-center">
        <img
          src={service}
          alt="contact"
          className="w-full max-h-[85vh] object-cover"
        />

        <div className="absolute flex flex-col items-center text-center">
          <h6 className="text-4xl md:text-6xl text-white font-bold">
            Our Services
          </h6>
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
