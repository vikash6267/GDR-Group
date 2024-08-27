import React from "react";
import logo from "../../../assests/logos/gdrgruop.jpg";
const Gallery = () => {
  const gallery = [
    { id: 1, name: "Sunset", src: logo },
    { id: 2, name: "Mountain", src: logo },
    { id: 3, name: "Ocean", src: logo },
    { id: 4, name: "Forest", src: logo },
    // Add more images as needed
  ];

  return (
    <div className="my-10">
      <div className=" flex flex-col  w-full items-center">
        <h3 className="  text-4xl font-fjalla text-[#33536B]">Our Gallery</h3>
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
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex flex-nowrap">
          {gallery.map((image, index) => (
            <div
              key={image.id}
              className={`relative p-2 flex-shrink-0 ${
                index % 2 === 0 ? "w-1/4" : "w-1/2"
              } md:${index % 2 === 0 ? "w-1/6" : "w-1/3"} lg:${
                index % 2 === 0 ? "w-1/8" : "w-1/4"
              }`}
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <span className="text-white text-sm md:text-lg">
                  {image.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;