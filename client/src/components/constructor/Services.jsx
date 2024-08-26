import React from "react";
import { Slide } from "react-awesome-reveal";
import briks from "../../assests/constructor/briks.jpeg";
import cement from "../../assests/constructor/cement.jpeg";
import craser from "../../assests/constructor/craser.jpg";
import el from "../../assests/constructor/el.png";
import iron from "../../assests/constructor/iron.jpg";
import sariya from "../../assests/constructor/sariya.jpeg";
import send from "../../assests/constructor/send.jpg";
import wire from "../../assests/constructor/wire.webp";
const company = [
  {
    img: craser,
    title: "Crusher Plant",
    desc: "This is the description for Home.",
  },
  {
    img: cement,
    title: "Cement Plant",
    desc: "This is the description for Milk.",
  },
  {
    img: briks,
    title: "Bricks Plant",
    desc: "This is the description for Food.",
  },
  {
    img: send,
    title: "Sand Plant",
    desc: "This is the description for Food.",
  },
  {
    img: iron,
    title: "Iron Engle",
    desc: "This is the description for Food.",
  },
  {
    img: sariya,
    title: "Sariya",
    desc: "This is the description for Food.",
  },
  {
    img: wire,
    title: "Wire",
    desc: "This is the description for Food.",
  },
  {
    img: el,
    title: "Electrical Material",
    desc: "This is the description for Food.",
  },
];

const Company = () => {
  return (
    <div className="my-20">
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
      <div className="main grid lg:grid-cols-3 gap-4 p-5 max-w-7xl mx-auto">
        <Slide direction="left">
          {company.map((currElem, index) => (
            <div
              key={index}
              className="relative card rounded-lg  cursor-pointer group shadow-xl shadow-pink-500 h-96 "
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
