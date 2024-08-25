import React from "react";

const services = [
  {
    image: "https://via.placeholder.com/300",
    title: "Service 1",
    subtitle: "Best Service Ever",
    description: "This is a detailed description of Service 1.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Service 2",
    subtitle: "Excellent Support",
    description: "This is a detailed description of Service 2.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Service 3",
    subtitle: "Quality Assurance",
    description: "This is a detailed description of Service 3.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Service 3",
    subtitle: "Quality Assurance",
    description: "This is a detailed description of Service 3.",
  },
];

const Services = () => {
  return (
    <div className="my-16">
      <div className=" flex flex-col  w-full items-center">
        <h3 className="  text-4xl font-fjalla text-[#33536B]">Our Services</h3>
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
            className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={`Service ${index + 1}`}
              className="w-full  object-cover group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
            />
            {/* Title and Subtitle */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4 transition-transform duration-300 ease-in-out group-hover:translate-x-full">
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-sm">{service.subtitle}</p>
            </div>
            {/* Hidden content */}
            <div className="absolute inset-0 bg-white flex flex-col justify-center items-center text-center p-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-sm">{service.subtitle}</p>
              <p className="mt-4 text-gray-800">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
