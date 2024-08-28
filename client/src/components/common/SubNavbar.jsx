import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="bg-[#212385] text-white py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-2 md:space-y-0">
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
          <div className="flex  justify-center md:justify-start items-center space-x-6">
            <div className="flex items-center">
              <FiMapPin className="text-lg mr-2" />
              <span className="font-semibold"> Bhopal</span>
            </div>
            <div className="flex items-center">
              <FiPhone className="text-lg mr-2" />
              <span className="font-semibold">+919893730005</span>
            </div>
            <div className="flex items-center">
              <FiMail className="text-lg mr-2" />
              <span className="font-semibold">rkshomes30@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link
            to="#"
            className="text-white hover:text-gray-300"
            aria-label="Facebook"
          >
            <FaFacebook size={22} />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="YouTube"
          >
            <FaYoutube size={22} />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
