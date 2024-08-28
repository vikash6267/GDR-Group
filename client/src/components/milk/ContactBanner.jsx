import React from "react";

const ContactBanner = () => {
  return (
    <div className="bg-yellow-500 text-white py-8 px-4 md:px-8 rounded-lg shadow-lg my-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Become a Dealer or Sub-Dealer
          </h2>
          <p className="text-lg mb-4">
            Interested in partnering with us? Contact us today!
          </p>
          <p className="text-lg font-semibold">Phone: 123-456-7890</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <a
            href={`tel:1234567890`}
            className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;