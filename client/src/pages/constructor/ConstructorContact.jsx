import React from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import contact from "../../assests/contact.jpg";
import SubNavbar from "../../components/common/SubNavbar";
import SubNav2 from "../../components/common/SubNav2";
import ConstructionNavbar from "../../components/common/construction/ConstructionNavbar";
import Footer from "../../components/common/Footer";

const ConstructorContact = () => {
  return (
    <div>
      <SubNavbar />
      <SubNav2 />
      <ConstructionNavbar />
      <div className="relative flex justify-center items-center">
        <img
          src={contact}
          alt="contact"
          className="w-full max-h-[85vh] object-cover"
        />
        <div className="absolute lg:bottom-6 -bottom-16 lg:left-6 p-6 bg-transparent bg-opacity-80 shadow-lg rounded-xl border border-gray-300 animate-bounce-vertical transition-transform duration-300 ease-in-out max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Contact Us
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-center mb-2 text-white text-sm">Main Offices</p>
            <p className="text-center mb-2 text-white text-sm">
              Mon - Sat 10.00 - 18.00
            </p>
            <p className="text-center mb-4 text-white text-lg font-semibold">
              +32 (0) 73 240 396
            </p>
            <p className="text-center mb-4 text-white text-lg font-semibold">
              industrie.info@gmail.com
            </p>
            <p className="text-center text-white text-sm">
              5214F Diamond Heights Blvd, San Francisco, USA
            </p>
          </div>
        </div>

        <div className="absolute flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Who are we?
          </h1>
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>
      <div className="relative ">
        {/* Map Background */}
        <div className="absolute top-52 inset-0 z-0">
          {/* Replace with your map image or iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24300.37058745542!2d-0.1396336!3d51.5114219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605197cbac571%3A0x8dbe0ffdc1e1427c!2sLondon%20Eye!5e0!3m2!1sen!2sus!4v1692962633304!5m2!1sen!2sus"
            className="w-screen h-[70vh]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="relative z-10 max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-md mt-20">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            The point of using Lorem Ipsum is that it has more-or-less packages
            normal make a type specimen book it has survived.
          </p>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="col-span-1 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="col-span-1 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone"
                className="col-span-1 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <textarea
              placeholder="Write Here..."
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600"
            >
              Send Message <FaArrowRight className="ml-2" />
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ConstructorContact;
