// src/components/Footer.js
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SiMaplibre } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className=" ">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <hr className="my-4" />
            <p>
              GDR Group 72 is a group of companies that was established in 2005,
              with a primary focus on the real estate, agricultural
              construction, construction and manufacturing industries. Through
              the years the company has expanded it’s operations, and has made
              substantial contributions to these industries.
            </p>
            <div className="mt-4">
              <img
                src="https://jharkhanditservices.com/images/icons/Review1.png"
                alt="Ratings"
                className="h-16"
              />
            </div>
          </div>
          <div className="grid  grid-cols-2 gap-8 lg:gap-10 px-5">
            <div className="">
              <h2 className="text-xl font-semibold mb-4">Our Companys</h2>
              <hr className="my-4" />
              <ul className="grid gap-2">
                <Link to="#">New RK Construction</Link>

                <Link to="/">RKS Homes</Link>
                <Link to="/">SRS Foods</Link>
                <Link to="/">Ri Si Home Food</Link>
                <Link to="/">72 GDR Steel</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/replacementpolicy">Replacement Policy</Link>
                <Link to="/tc">Terms of Use</Link>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <hr className="my-4" />
              <ul className="grid gap-2">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact </Link>
              </ul>
            </div>
          </div>
          <div className="px-5">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <hr className="my-4" />
            <ul className="grid gap-3 list-disc ">
              <li>
                Janki Nagar, Neelkant Mahadev Mandir, Near Mashroom Factory
                Ratibad Bhopal
              </li>
            </ul>
            <ul className="grid my-3">
              <li>98937 30005</li>
            </ul>
            <ul className="grid my-3">
              <li>rkshomes30@gmail.com ​​</li>
              <li>r.k_construction@yahoo.com ​​</li>
              <li>srsmilkfood@gmail.com ​​</li>
              <li>ri.si.homefood@gmail.com ​​</li>
              <li> rrsliquid@gmail.com ​​</li>
            </ul>
            <div className="mt-5 flex space-x-4">
              <Link to="https://www.facebook.com/RKSHOME.CO.IN">
                <FaFacebook className="h-6 w-6" target="_blank" />
              </Link>

              <Link to="https://www.instagram.com/rks.homes/">
                <FaInstagram className="h-6 w-6" target="_blank" />
              </Link>

              <Link to="https://www.youtube.com/@rkshomes5376">
                <FaYoutube className="h-6 w-6" />
              </Link>
              <Link to="https://www.google.com/maps?q=23.1630267,77.2736317&z=17&hl=en">
                <SiMaplibre className="h-6 w-6" />
              </Link>
            </div>
            <div>
              <div className="flex items-center bg-green-500 rounded-full p-2 space-x-2 text-white hover:bg-green-600 transition w-fit px-5 mt-5 duration-300">
                <FaWhatsapp size={34} />
                <a
                  href="https://wa.me/+919893730005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm"
                >
                  WhatsApp
                  <span className="block text-sm font-normal">
                    Click to Chat
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-10 border-t border-blue-800 pt-4">
          <p>Made By I NEXT ETS ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
