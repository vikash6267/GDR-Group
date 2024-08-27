import React from "react";

import { Slide } from "react-awesome-reveal";

const company = [
  {
    img: "https://gdrgroup.in/wp-content/uploads/2022/12/Shree-Ji-pack-225x300.png",
    title: "RKS Homes",
    desc1:
      "Shree Ji 72 Cattle food is made of high quality protein, energy and essential minerals. It provides your cattle with essential nutrients that help to build strong bones and muscles.",
    desc2:
      "Shree Ji 72 Cattle food is a great source of iodine, which helps to keep your cattle healthy and prevent them from becoming sick.",
    desc3:
      "Shree Ji 72 Cattle food is also rich in calcium, which is essential for healthy teeth and bones.",
  },
  {
    img: "https://gdrgroup.in/wp-content/uploads/2022/12/Shree-Ji-225x300.png",
    desc1:
      "Shree Ji 72 Cattle food is made of high quality protein, energy and essential minerals. It provides your cattle with essential nutrients that help to build strong bones and muscles.",
    desc2:
      "Shree Ji 72 Cattle food is a great source of iodine, which helps to keep your cattle healthy and prevent them from becoming sick.",
    desc3:
      "Shree Ji 72 Cattle food is also rich in calcium, which is essential for healthy teeth and bones.",
  },
  {
    img: "https://gdrgroup.in/wp-content/uploads/2022/12/Shree-Ji-pack-225x300.png",

    title: "SRS Foods",
    desc1:
      "Shree Ji 72 Cattle food is made of high quality protein, energy and essential minerals. It provides your cattle with essential nutrients that help to build strong bones and muscles.",
    desc2:
      "Shree Ji 72 Cattle food is a great source of iodine, which helps to keep your cattle healthy and prevent them from becoming sick.",
    desc3:
      "Shree Ji 72 Cattle food is also rich in calcium, which is essential for healthy teeth and bones.",
  },
];

const Company = () => {
  return (
    <div className="my-20 overflow-hidden">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Our Products</h3>
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
              className="relative card rounded-lg  cursor-pointer group shadow-xl shadow-pink-500 h-[68vh] "
            >
              <div className="relative">
                <img
                  src={currElem.img}
                  alt={currElem.title}
                  className="min-w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:translate-y-[-50%]"
                />
              </div>
              <div className="absolute inset-0  flex flex-col top-48  bg-yellow-500 p-4 text-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <p className="z-10 text-sm">{currElem.desc1}</p>
                <p className="z-10 text-sm">{currElem.desc2}</p>
                <p className="z-10 text-sm">{currElem.desc3}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Company;
