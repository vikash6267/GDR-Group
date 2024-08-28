import React, { useEffect } from "react";
import Slider from "../../components/core/Home/Swipper";
import PriceTable from "../../components/greedsteel72/PriceTable";
import Product from "../../components/greedsteel72/Product";
import ContactBanner from "../../components/milk/ContactBanner";

const GreedSteelHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Slider />
      <PriceTable />
      <ContactBanner />
      <Product />
    </div>
  );
};

export default GreedSteelHome;
