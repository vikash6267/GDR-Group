import React from "react";
import home from "../../../assests/logos/rhome.jpg";
import milk from "../../../assests/logos/srs.jpg";
import food from "../../../assests/logos/rfood.jpg";
import { Slide } from "react-awesome-reveal";

const company = [
  {
    img: home,
    title: "RKS Infrabuild & Homes Pvt LTD",
    desc: "RKS Homes is a real estate company specializing in the sale of agricultural lands. We are committed to helping our clients find the perfect piece of land for their farming or ranching needs. Our team of real estate professionals has extensive knowledge .",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2023/3/DW/RJ/XB/37290892/monkey-hoist-or-mini-lift-500x500.jpeg",
    title: "Praharsh Constructor Pvt LTD",
    desc: "Praharsh Constructor Pvt LTD is a leading construction company that specializes in a wide range of civil works. We have extensive experience in delivering construction projects for both government and private bodies.",
  },
  {
    img: food,
    title: "Ruchir Home Food",
    desc: "Ruchir Home Food is a company that specializes in selling a wide range of spices and dry food items for home cooking. Our aim is to provide our customers with high-quality products .",
  },
  {
    img: milk,
    title: "SRS Cattle Feed & Milk Product",
    desc: "SRS Cattle Feed & Milk Product Company owns 2 brands – “Shree Ji 72” & “Shree Ji Milk Products“.is a manufacturer of milk products like milk, butter, clarified butter, cottage cheese, ice cream etc. The company was founded in the year 2018 and is headquartered in Bhopal, India.",
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
                <p className="z-10 text-sm">{currElem.desc}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Company;
