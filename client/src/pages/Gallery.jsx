import React, { useEffect, useState } from "react";
import SubNavbar from "../components/common/SubNavbar";
import NavbarMain from "../components/common/NavbarMain";
import Footer from "../components/common/Footer";
import h1 from "../assests/home/h1.jpg";
import h2 from "../assests/home/h2.jpg";
import h3 from "../assests/home/h3.jpg";
import h4 from "../assests/home/h4.jpg";
import c1 from "../assests/constructor/briks.jpeg";
import c2 from "../assests/constructor/cement.jpeg";
import c3 from "../assests/constructor/craser.jpg";
import c4 from "../assests/constructor/c8.jpg";
import MainCommon from "../components/common/MainCommon";
const data = [
  {
    id: 1,
    name: "Home",
    image: h1,
  },
  {
    id: 2,
    name: "Home",
    image: h2,
  },
  {
    id: 3,
    name: "Home",
    image: h3,
  },
  {
    id: 4,
    name: "Mountain",
    image: h4,
  },
  {
    id: 5,
    name: "Constructor",
    image: c1,
  },
  {
    id: 6,
    name: "Constructor",
    image: c2,
  },
  {
    id: 7,
    name: "Constructor",
    image: c3,
  },
  {
    id: 8,
    name: "Constructor",
    image: c4,
  },
];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SubNavbar />
      <NavbarMain />
      <div className="flex mt-5 flex-col w-full items-center">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4">
        {data.map((item) => (
          <Tile key={item.id} data={item} />
        ))}
      </div>
      <MainCommon />

      <Footer />
    </div>
  );
};

const Tile = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const tileStyle = isOpen
    ? "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
    : "relative w-full h-48 sm:h-64 lg:h-80";

  const imgStyle = isOpen
    ? "lg:w-[60vw] lg:h-[80vh] w-[80vw] h-[50vh] object-cover transition-all duration-300 ease-in-out"
    : "w-full h-full object-cover transition-all duration-300 ease-in-out";
  return (
    <div
      className={`tile ${tileStyle} cursor-pointer transition-all duration-300 ease-in-out`}
      onClick={handleClick}
    >
      <img
        src={data.image}
        alt={data.name}
        className={imgStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && !isOpen && (
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
          {data.name}
        </div>
      )}
    </div>
  );
};

export default Gallery;
