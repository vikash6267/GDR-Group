import React from "react";
import home from "../../../assests/logos/home.jpg";
import milk from "../../../assests/logos/milk.jpg";
import food from "../../../assests/logos/food.jpg";
import { Slide } from "react-awesome-reveal";

const company = [
  {
    img: home,
    title: "RKS Homes",
    desc: "This is the description for Home.",
  },
  {
    img: milk,
    title: "Ri Si Home Food",
    desc: "This is the description for Milk.",
  },
  {
    img: food,
    title: "SRS Foods",
    desc: "This is the description for Food.",
  },
];

const Company = () => {
  return (
    <div className="my-20">
      <div className=" flex flex-col  w-full items-center">
        <h3 className="  text-4xl font-fjalla text-[#33536B]">Our Companys</h3>
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
      <div className="main grid lg:grid-cols-3 gap-4 p-5 max-w-7xl mx-auto">
        <Slide direction="left">
          {company.map((currElem, index) => (
            <div
              key={index}
              className="relative card rounded-lg  cursor-pointer group shadow-xl shadow-pink-500 "
            >
              <div className="h-full relative">
                <img
                  src={currElem.img}
                  alt={currElem.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:translate-y-[-50%]"
                />
                <p className="absolute text-center bottom-0 left-0 w-full text-lg font-bold text-white bg-opacity-75 bg-gray-800 p-2 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                  {currElem.title}
                </p>
              </div>
              <div className="absolute inset-0  top-48 flex bg-yellow-500 p-4 text-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <p className="z-10 text-xl">{currElem.desc}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Company;
