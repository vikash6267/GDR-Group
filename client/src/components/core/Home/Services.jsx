import React from "react";
import { Link } from "react-router-dom";
import home from "../../../assests/home/h2.jpg";
const services = [
  {
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/DW/RJ/XB/37290892/monkey-hoist-or-mini-lift-500x500.jpeg",
    title: "New RK Constructor",
    subtitle: "Best Service Ever",
    description:
      "New RK Constructions is a leading construction company that specializes in a wide range of civil works. We have extensive experience in delivering construction projects for both government and private bodies",
    link: "construction-home",
  },
  {
    image: home,
    title: "RKS Home",
    subtitle: "Excellent Home ",
    description:
      "RKS Homes is a real estate company specializing in the sale of agricultural lands. We are committed to helping our clients find the perfect piece of land for their farming or ranching needs. Our team of real estate professionals has extensive knowledge of the local agricultural market and can provide valuable insights and guidance to help our clients make informed decisions.",
  },
  {
    image:
      "https://gdrgroup.in/wp-content/uploads/2022/12/Shree-Ji-225x300.png",
    title: "SRK Food",
    subtitle: "Bes Quality Assurance",
    description:
      "SRS Cattle and Milk Food Company owns 2 brands – “Shree Ji 72” & “Shree Ji Milk Products“.is a manufacturer of milk products like milk, butter, clarified butter, cottage cheese, ice cream etc. The company was founded in the year 2018 and is headquartered in Bhopal, India.",
  },
  {
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/7/HJ/RA/RN/26624004/whatsapp-image-2022-07-19-at-11-15-10-pm-500x500.jpeg",
    title: "Ri Si Home Food",
    subtitle: "Best Quality Assurance",
    description:
      "Ri Si Home Food is a company that specializes in selling a wide range of spices and dry food items for home cooking. Our aim is to provide our customers with high-quality products that will enhance the flavor of their dishes and make their cooking experience more enjoyable.",
  },
  {
    image:
      "https://gdrgroup.in/wp-content/uploads/2023/02/10-STAINLESS-STEEL-REBAR.webp",
    title: "72 GDR Steel",
    subtitle: " Quality Assurance",
    description:
      "72 GDR Steel is a company that specializes in the production and distribution of high-quality steel products. The company’s main focus is on TMT iron rods, which are used in the construction industry for the reinforcement of concrete structures.",
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
            <div className="absolute inset-0 bg-pink-500 flex flex-col justify-center items-center text-center p-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20">
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-sm">{service.subtitle}</p>
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
