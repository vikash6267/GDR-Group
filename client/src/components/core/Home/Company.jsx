import React from "react";
import home from "../../../assests/logos/home.jpg";
import milk from "../../../assests/logos/milk.jpg";
import food from "../../../assests/logos/food.jpg";
import { Slide } from "react-awesome-reveal";

const company = [
  {
    img: home,
    title: "RKS Homes",
    desc: "RKS Homes is a real estate company specializing in the sale of agricultural lands. We are committed to helping our clients find the perfect piece of land for their farming or ranching needs. Our team of real estate professionals has extensive knowledge of the local agricultural market and can provide valuable insights and guidance to help our clients make informed decisions.",
  },
  {
    img: food,
    title: "Ri Si Home Food",
    desc: "Ri Si Home Food is a company that specializes in selling a wide range of spices and dry food items for home cooking. Our aim is to provide our customers with high-quality products that will enhance the flavor of their dishes and make their cooking experience more enjoyable.",
  },
  {
    img: milk,
    title: "SRS Foods",
    desc: "SRS Cattle and Milk Food Company owns 2 brands – “Shree Ji 72” & “Shree Ji Milk Products“.is a manufacturer of milk products like milk, butter, clarified butter, cottage cheese, ice cream etc. The company was founded in the year 2018 and is headquartered in Bhopal, India.",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2023/3/DW/RJ/XB/37290892/monkey-hoist-or-mini-lift-500x500.jpeg",
    title: "New RK Constructions",
    desc: "New RK Constructions is a leading construction company that specializes in a wide range of civil works. We have extensive experience in delivering construction projects for both government and private bodies.",
  },
  {
    img: "https://endura-steel.com/wp-content/uploads/2023/06/steel-facts.jpg",
    title: "72 GDR Steel",
    desc: "72 GDR Steel is a company that specializes in the production and distribution of high-quality steel products. The company’s main focus is on TMT iron rods, which are used in the construction industry for the reinforcement of concrete structures.",
  },
  {
    id: 7,
    img: "https://t3.ftcdn.net/jpg/07/34/77/60/360_F_734776078_Z94kwR6jm2w1HxmPeSjqJNJFqM4Mp3Nk.jpg",
    title: "RRS Liquid Products",
    desc: "Offers refreshing beverages including flavored water and energy drinks.",
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
