import React from "react";

const CompanyDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Agriculture & Commercial Land */}
      <div className="mb-12">
        <h2 className="text-2xl font-extrabold text-green-800 mb-6">
          Agriculture & Commercial Land
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          At{" "}
          <span className="font-semibold text-green-600">
            RKS Infrabuild & Homes Pvt. LTD.
          </span>
          , we specialize in providing premium agricultural and commercial land
          solutions, ensuring high-quality investments in prime locations.
        </p>
      </div>

      {/* Construction */}
      <div className="mb-12">
        <h2 className="text-2xl font-extrabold text-blue-800 mb-6">
          Construction
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          <span className="font-semibold text-blue-600">
            Praharsh Constructor Pvt. LTD.
          </span>{" "}
          is committed to delivering excellence in construction, focusing on
          innovative designs and sustainable building practices.
        </p>
        <div className="ml-6 mt-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Government Construction & Civil Work
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We handle government projects with precision and adherence to
            regulations, ensuring top-notch civil work that stands the test of
            time.
          </p>
        </div>
      </div>

      {/* Home Food */}
      <div className="mb-12">
        <h2 className="text-2xl font-extrabold text-red-800 mb-6">Home Food</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          <span className="font-semibold text-red-600">Ruchir Home Food</span>{" "}
          offers a wide range of home food products, including groceries,
          grains, and dried fruits, delivering the freshness and quality you
          deserve.
        </p>
        <div className="ml-6 mt-6">
          <h3 className="text-xl font-semibold text-red-700 mb-3">
            All Groceries, Grains, & Dry Fruits
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our extensive selection includes all types of grocery items, grains,
            and premium quality dry fruits, ensuring that you always have the
            best ingredients for your meals.
          </p>
        </div>
      </div>

      {/* Cattle Food and Milk Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-extrabold text-yellow-800 mb-6">
          Cattle Food & Milk Products
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          <span className="font-semibold text-yellow-600">
            SRS Cattle Feed & Milk Product
          </span>{" "}
          provides a variety of cattle feed options and high-quality milk
          products, supporting your dairy farming needs with excellence.
        </p>
        <div className="ml-6 mt-6">
          <h3 className="text-xl font-semibold text-yellow-700 mb-3">
            All Types of Milk Products
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We offer a range of milk products, ensuring that your dairy
            operations are supported with the finest quality offerings.
          </p>
        </div>
        <div className="ml-6 mt-6">
          <h3 className="text-xl font-semibold text-yellow-700 mb-3">
            All Types of Food Material
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our selection includes all types of food materials tailored to meet
            the dietary needs of your cattle, promoting healthy growth and
            productivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
