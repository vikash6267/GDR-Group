import React from "react";

const products = [
  {
    id: 1,
    image:
      "https://gdrgroup.in/wp-content/uploads/2022/11/Midaas-Pashu-Ahar.png",
    title: "Shree Ji 72 Midaas",
    subtitle: "(Cattle Food)",
    description:
      "मिडास (पशु आहार) प्रोटीन फ़ूड, एनर्जी फ़ूड, आयोडीन एवं कैल्शियम युक्त",
  },
  {
    id: 2,
    image:
      "https://gdrgroup.in/wp-content/uploads/2022/11/Daimond-Pashu-Ahar.png",
    title: "Shree Ji 72 Diamond",
    subtitle: "(Cattle Food)",
    description:
      "डायमंड (पशु आहार) प्रोटीन फ़ूड, एनर्जी फ़ूड, आयोडीन एवं कैल्शियम युक्त",
  },
  {
    id: 3,
    image: "https://gdrgroup.in/wp-content/uploads/2022/11/Mix-chana-churi.png",
    title: "Shree Ji 72 Mix",
    subtitle: "(Chana Churi)",
    description: "",
  },
  {
    id: 4,
    image: "https://gdrgroup.in/wp-content/uploads/2022/11/chapad.png",
    title: "Shree Ji 72 Chapad",
    subtitle: "",
    description: "",
  },
  {
    id: 5,
    image: "https://gdrgroup.in/wp-content/uploads/2022/11/Khal-Alsi.png",
    title: "Shree Ji 72 Khal Alsi",
    subtitle: "",
    description: "",
  },
  {
    id: 6,
    image: "https://gdrgroup.in/wp-content/uploads/2022/11/Saylej.png",
    title: "Shree Ji 72 Sailez",
    subtitle: "",
    description: "",
  },
  // Add more products as needed
];

const MilkProduct = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        ठंडी, गर्मी एवं बरसात के समयानुसार एक्सपर्ट टीम द्वारा तैयार
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
          >
            <img
              className="w-full h-48 object-contain p-4"
              src={product.image}
              alt={product.title}
            />
            <div className="p-6">
              <h2 className="font-bold text-red-700 text-xl mb-2">
                {product.title}
              </h2>
              <h3 className="text-gray-700 text-md mb-4">{product.subtitle}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilkProduct;
