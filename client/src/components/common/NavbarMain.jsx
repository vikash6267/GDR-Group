import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assests/logos/gdrgruop.jpg";
import { navlinks } from "../../data/navlink";
import Modal from "../core/contact/Modal";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube,FaGoogle  } from "react-icons/fa";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal();
  };

  return (
    <div>

      <nav className="bg-gray-900 text-white py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Logo and Contact Information */}
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-14" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex flex-grow items-center justify-center">
            <ul className="flex space-x-8">
              {navlinks?.map((link) => (
                <li key={link.id} className="relative group">
                  <Link
                    to={link.path}
                    className="text-lg font-semibold flex items-center border-b-4 border-transparent hover:border-red-700 transition-all duration-300"
                  >
                    {link.title}
                    {link.sublink && (
                      <FaChevronDown className="inline ml-1 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Sublinks dropdown */}
                  {link.sublink && (
                    <ul className="absolute left-0 mt-2 bg-gray-700 border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      {link.sublink.map((sublink, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-red-600">
                          <Link
                            to={sublink.path}
                            className="text-white border-transparent transition-all duration-300"
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Enquiry Button and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              className="hidden lg:block relative overflow-hidden bg-red-600 text-white py-2 px-5 text-xl rounded shadow-lg transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-black before:z-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:text-white"
              onClick={handleSubmit}
            >
              <span className="relative z-10">Get Quotes</span>
            </button>
            <button onClick={toggleMobileMenu} className="lg:hidden text-2xl">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      // Mobile Menu
<div
  className={`fixed top-0 right-0 w-3/4 h-full bg-gray-800 border-t border-gray-600 z-50 transform transition-transform duration-300 ease-in-out ${
    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex items-center justify-between p-4 border-b border-gray-600">
    <img src={logo} alt="GDR Logo" className="h-12" />
    <button onClick={toggleMobileMenu} className="text-2xl text-white">
      <FaTimes />
    </button>
  </div>
  <ul className="flex flex-col mt-4">
    {navlinks?.map((link, index) => (
      <li key={link.id} className="relative">
        <Link
          to={link.path}
          onClick={() => link.sublink && handleLinkClick(link.id)}
          className={`px-4 py-2 text-lg font-semibold flex items-center justify-between text-white border-b-2 border-transparent hover:border-red-500 transition-all duration-300 
           
          `}
        >
          {link.title}
          {link.sublink && (
            <FaChevronDown
              className={`transition-transform duration-300 ${
                activeMenu === link.id ? "rotate-180" : ""
              }`}
            />
          )}
        </Link>

        {/* Sublinks dropdown for mobile */}
        {link.sublink && activeMenu === link.id && (
          <ul className="pl-4 bg-gray-600">
            {link.sublink.map((sublink, index) => (
              <li
                key={index}
                className={`py-2 ${
                  (index === link.sublink.length - 1 || index === link.sublink.length - 2) ? "border-b border-gray-500" : ""
                } hover:bg-gray-500`}
              >
                <Link
                  to={sublink.path}
                  className="text-white border-b-2 border-transparent transition-all duration-300"
                >
                  {sublink.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>

  <div className="flex space-x-4 w-11/12 mx-auto items-center justify-center mt-10">
  <Link
    to="https://www.facebook.com/RKSHOME.CO.IN"
    className="text-blue-600 hover:text-blue-400 border border-blue-600 hover:border-blue-400 rounded-full p-3 px-5 transition-all duration-300"
    aria-label="Facebook"
    target="_blank"
  >
    <FaFacebook size={22} />
  </Link>

  <Link
    to="https://www.instagram.com/rks.homes/"
    className="text-pink-600 hover:text-pink-400 border border-pink-600 hover:border-pink-400 rounded-full p-3 px-5 transition-all duration-300"
    aria-label="Instagram"
    target="_blank"
  >
    <FaInstagram size={22} />
  </Link>
  <Link
    to="https://www.youtube.com/@rkshomes5376"
    className="text-red-600 hover:text-red-400 border border-red-600 hover:border-red-400 rounded-full p-3 px-5 transition-all duration-300"
    aria-label="YouTube"
    target="_blank"
  >
    <FaYoutube size={22} />
  </Link>

  <Link
    to="https://www.google.com/maps?q=23.1630267,77.2736317&z=17&hl=en"
    className="text-blue-600 hover:text-blue-400 border border-blue-600 hover:border-blue-400 rounded-full p-3 px-5 transition-all duration-300"
    aria-label="Facebook"
    target="_blank"
  >
    <FaGoogle  size={22} />
  </Link>
  {/* <Link
    href="#"
    className="text-blue-700 hover:text-blue-500 border border-blue-700 hover:border-blue-500 rounded-full p-2 transition-all duration-300"
    aria-label="LinkedIn"
  >
    <FaLinkedin size={22} />
  </Link> */}
</div>


</div>


      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Navbar;
