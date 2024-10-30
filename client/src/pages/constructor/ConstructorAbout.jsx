import React, { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import contact from "../../assests/about.png";
import SubNavbar from "../../components/common/SubNavbar";
import ConstructionNavbar from "../../components/common/construction/ConstructionNavbar";
import Footer from "../../components/common/Footer";
import { FaCheckCircle } from "react-icons/fa";
import Devision from "../../components/common/Devision";
import CompanyDetails from "../../components/CompanyDetails";
import { Helmet } from "react-helmet";

const ConstructorAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>About - New RK Construction. </title>
        <meta
          name="description"
          content="GDR Group 72: A dynamic conglomerate specializing in Agriculture, Dairy, Farm Land, and Commercial Property with a mission to drive growth in rural communities through innovation and sustainability"
        />
      </Helmet>
      <SubNavbar />
      <ConstructionNavbar />
      <div className="relative flex justify-center items-center">
        <img
          src={contact}
          alt="contact"
          className="w-full max-h-[85vh] object-cover"
        />

        <div className="absolute flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Who are we?
          </h1>
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            GDR GROUP 72
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            GDR Group 72 is a group of companies that was established in 2005,
            with a primary focus on the real estate, agricultural construction,
            construction and manufacturing industries. Through the years the
            company has expanded its operations and has made substantial
            contributions to these industries.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            GDR Group 72's fundamental values of honesty, innovation, and
            quality have allowed it to develop into an industry leader in its
            specific sectors. GDR Group 72 takes pride in its determination to
            provide high-quality items and solutions that satisfy the
            requirements and exceed the expectations of its clients.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As a socially responsible company, GDR Group 72 recognizes the
            importance of sustainable development and has instituted green
            practices throughout its subsidiaries. GDR Group 72 believes in
            building lasting relationships with its clients as well as employees
            and partners through the development of trust and respect for each
            other.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In the present, GDR Group 72 comprises diverse companies, such as
            RKS Homes, SRS Cattle and Milk Food, NEW RK Construction, Ri Si Home
            Food, RS 1 Liquid Products as well as 72 GD Steel. Every one of them
            has contributed greatly to the growth of the group and its growth,
            demonstrating GDR Group 72's values and dedication to excellence.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            All in all, GDR Group 72 continues to diversify and grow its
            business operations, while staying true to its fundamental values
            and its vision. The management and leadership team are committed to
            making sure that the company has a sustainable growth path and a
            bright future for the company’s businesses as well as its employees
            and other stakeholders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 text-sm gap-4 mt-8">
            <ul className="list-none space-y-2">
              <li className="flex items-center text-gray-800">
                <FaCheckCircle className="text-green-600 mr-2" />
                RKS Infrabuild & Homes Pvt. LTD.
              </li>
              <li className="flex items-center text-gray-800">
                <FaCheckCircle className="text-green-600 mr-2" />
                New RK Construction.
              </li>
            </ul>

            <ul className="list-none space-y-2">
              <li className="flex items-center text-gray-800">
                <FaCheckCircle className="text-green-600 mr-2" />
                SRS Home Food
              </li>
              <li className="flex items-center text-gray-800">
                <FaCheckCircle className="text-green-600 mr-2" />
                Nirvdit All Making Products Private Limited
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <CompanyDetails />
      <br />
      <Devision />

      <Footer />
    </div>
  );
};

export default ConstructorAbout;
