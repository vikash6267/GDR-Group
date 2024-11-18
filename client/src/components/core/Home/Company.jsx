import React from "react";
import home from "../../../assests/logos/rhome.jpg";
import milk from "../../../assests/logos/srs.jpg";
import food from "../../../assests/par.jpg";
import { Slide } from "react-awesome-reveal";
import prabhash from "../../../assests/logos/home.jpg";
import n from "../../../assests/nir.jpg";

const company = [
  {
    img: home,
    title: "RKS Infrabuild & Homes Pvt LTD",
    desc: "RKS Homes is a real estate company specializing in the sale of agricultural lands. We are committed to helping our clients find the perfect piece of land for their farming or ranching needs. Our team of real estate professionals has extensive knowledge.",
  },
  {
    img: prabhash,
    title: "New RK Construction",
    desc: "New RK Construction is a leading construction company that specializes in a wide range of civil works. We have extensive experience in delivering construction projects for both government and private bodies.",
  },
  {
    img: food,
    title: "SRS Home Food",
    desc: "SRS Home Food is a company that specializes in selling a wide range of spices and dry food items for home cooking. Our aim is to provide our customers with high-quality products.",
  },
  {
    img: n,
    title: "Nirvdit All Making Products Private Limited",
    desc: "Nirvdit All Making Products Private Limited Company owns 2 brands – “Shree Ji 72” & “Shree Ji Milk Products“.is a manufacturer of milk products like milk, butter, clarified butter, cottage cheese, ice cream etc. The company was founded in the year 2018 and is headquartered in Bhopal, India.",
  },
];

const Company = () => {
  return (
    <div className="my-20 overflow-hidden">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Our Companies</h3>
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
      <div className="main grid lg:grid-cols-2 gap-4 p-5 max-w-7xl mx-auto">
        <Slide direction="left">
          {company.map((currElem, index) => (
            <div
              key={index}
              className="relative card rounded-lg cursor-pointer group shadow-xl shadow-pink-500 h-auto flex flex-col lg:flex-row gap-4 p-4"
            >
              {/* Left side - Image and title */}
              <div className="flex-shrink-0 w-full lg:w-1/3 h-full relative">
                <img
                  src={currElem.img}
                  alt={currElem.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Title Overlay */}
             
              </div>

              {/* Right side - Description */}
              <div className="flex-grow bg-gray-100 p-4 rounded-lg shadow-lg bg-opacity-90">
              <p className="text-lg font-bold text-gray-900 ">{currElem.title}</p>
               
                <p className="text-sm text-gray-700">{currElem.desc}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Company;
