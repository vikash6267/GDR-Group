import React from 'react';

const offerings = [
  {
    title: "Properties",
    description: "Our properties are located throughout the region, offering a variety of options including fertile soil, convenient access to markets, and peaceful settings.",
  },
  {
    title: "Land Types",
    description: "We offer small hobby farms, large commercial operations, and everything in between. Suitable for vegetable farming, commercial gardening, organic farming, and more.",
  },
  {
    title: "Financing",
    description: "We offer financing options to make the process of purchasing land easier. With RKS Homes, you can trust that you are in good hands.",
  },
  {
    title: "Land Availability",
    description: "More than 10,890 acres of land available for farming. Best suitable for vegetable farming, commercial gardening, organic farming, botanical gardens, and bulk farming activities.",
  },
  {
    title: "Additional Uses",
    description: "Lands suitable for warehouses, daily farming, cattle and livestock business, mushroom farming, Musli farming, poultry farms, and more.",
  },
  {
    title: "Investment Opportunity",
    description: "RKS Homes offers you a trustworthy investment opportunity in agriculture and commercial farmland with a 100% guaranteed return.",
  }
];

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            About RKS Infrabuild & Homes Pvt. Ltd.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            RKS Homes is a real estate company specializing in the sale of agricultural lands. We are committed to helping our clients find the perfect piece of land for their farming or ranching needs. Our team of real estate professionals has extensive knowledge of the local agricultural market and can provide valuable insights and guidance to help our clients make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{offering.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
