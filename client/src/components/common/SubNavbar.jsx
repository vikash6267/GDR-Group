import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const TopHeader = () => {
  return (
    <div className="bg-blue-500 text-white py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center mr-6">
            <FiMapPin className="text-lg mr-2" />
            <span className="font-semibold">Ratibad, Bhopal</span>
          </div>
          <div className="flex items-center mr-6">
            <FiPhone className="text-lg mr-2" />
            <span className="font-semibold">+919893730005</span>
          </div>
          <div className="flex items-center">
            <FiMail className="text-lg mr-2" />
            <span className="font-semibold">rkshomes30@gmail.com</span>
          </div>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="Facebook"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="YouTube"
          >
            <FaYoutube size={22} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
