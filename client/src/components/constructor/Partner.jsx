import React from "react";
import logo from "../../assests/constructor/client.png";

const partners = [
  { name: "Arik Air", logo: logo, url: "https://www.arikair.com" },
  { name: "FSDH Merchant Bank", logo: logo, url: "https://www.fsdh.com" },
  {
    name: "Aella Credit",
    logo: logo,
    url: "https://www.aellacredit.com",
  },
  { name: "Aero", logo: logo, url: "https://www.flyaero.com" },
  { name: "Dangote", logo: logo, url: "https://www.dangote.com" },
];

const Partners = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-orange-500 text-sm font-semibold mb-4">PARTNERS</h2>
        <h3 className="text-3xl font-bold mb-8">
          Partners Who Trust Industrie
        </h3>
        <div className="flex flex-wrap justify-center space-x-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-40 h-40 flex items-center justify-center animate-rotate"
            >
              <img src={partner.logo} alt={partner.name} className="max-h-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
