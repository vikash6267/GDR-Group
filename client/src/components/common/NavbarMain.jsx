import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assests/logos/gdrgruop.jpg";
import { navlinks } from "../../data/navlink";

function NavbarMain() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="w-screen h-[70px] shadow-md bg-[#18191b] text-white">
      <div className="flex items-center justify-between w-11/12 mx-auto">
        {/* Desktop Menu */}
        <div className="hidden md:flex lg:flex items-center space-x-8 justify-center my-5 w-full">
          <img src={logo} alt="GDR Logo" className="h-16 lg:hidden" />
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
                  <ul className="absolute left-0 mt-2 bg-gray-700 border  rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    {link.sublink.map((sublink, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-red-600">
                        <Link
                          to={sublink.path}
                          className="text-white border-transparent  transition-all duration-300"
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between w-full">
          <img src={logo} alt="GDR Logo" className="h-16" />
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-800 border-t border-gray-600 z-50 transform transition-transform duration-300 ease-in-out ${
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
          {navlinks?.map((link) => (
            <li key={link.id} className="relative">
              <Link
                to={link.path}
                onClick={() => link.sublink && handleLinkClick(link.id)}
                className=" px-4 py-2 text-lg font-semibold flex items-center justify-between text-white border-b-2 border-transparent hover:border-red-500 transition-all duration-300"
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
                    <li key={index} className="py-2 hover:bg-gray-500">
                      <Link
                        to={sublink.path}
                        className="text-white border-b-2 border-transparent  transition-all duration-300"
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
    </div>
  );
}

export default NavbarMain;
