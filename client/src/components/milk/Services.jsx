import React from "react";
import { Link } from "react-router-dom";
import creame from "../../assests/milk/creame.jpeg";
import dahi from "../../assests/milk/dahi.webp";
import dudh from "../../assests/milk/dudh.jpeg";
import ghee from "../../assests/milk/ghee.jpg";
import lassi from "../../assests/milk/lassi.webp";
import matha from "../../assests/milk/maththa.webp";
import paneer from "../../assests/milk/paneer.jpeg";
import shak from "../../assests/milk/shak.jpeg";
const services = [
  {
    image: creame,
    title: "Cream",
    subtitle: "Best Cream",
    description: "We Have All Brands of Fresh Creame",
    link: "/construction/home",
  },
  {
    image: dahi,
    title: "Dahi",
    subtitle: "Best Dahi",
    description: "We Have All Brands of Fresh Dahi",
  },
  {
    image: dudh,
    title: "Dudh",
    subtitle: "Best Dudh",
    description: "We Have All Brands of Fresh Dudh",
  },
  {
    image: ghee,
    title: "Ghee",
    subtitle: "Best Ghee",
    description: "We Have All Brands of Fresh Ghee",
  },
  {
    image: lassi,
    title: "Lassi",
    subtitle: "Best Lassi",
    description: "We Have All Brands of Fresh Lassi",
  },

  {
    image: matha,
    title: "mattha",
    subtitle: "Best mattha",
    description: "We Have All Brands of Fresh mattha",
  },
  {
    image: paneer,
    title: "Panner",
    subtitle: "Best Panner",
    description: "We Have All Brands of Fresh Panner",
  },
  {
    image: shak,
    title: "Shake",
    subtitle: "Best Shake",
    description: "We Have All Brands of Fresh Shake",
  },
];

const Services = () => {
  return (
    <div className="my-16">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Our Services</h3>
        <div className="flex items-center w-[75px]">
          <div className="h-0.5 bg-[#e2571a]"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
          <div
            className="h-[4px] rounded-full w-[10px] flex-grow"
            style={{ backgroundColor: "#e2571a" }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={`Service ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            {/* Shaded overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            {/* Overlay for Title and Subtitle */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 z-20 transition-transform duration-500 ease-in-out group-hover:translate-x-full">
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-sm">{service.subtitle}</p>
            </div>
            {/* Hidden content */}
            <div className="absolute inset-0 bg-white flex flex-col justify-center items-center text-center p-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20">
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="mt-4 text-gray-800">{service.description}</p>
              <Link
                to={service.link}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
