import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Devision from "../../components/common/Devision";
import video from "../../assests/video.mp4";
const MilkAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const aboutImage =
    "https://img.freepik.com/free-vector/building-house-structure-flat-design_23-2147561234.jpg?w=740&t=st=1724415492~exp=1724416092~hmac=81b1aaf43aa647ef069800026a0d4aa27bc01a873317423351151fa74ab8c3a0";
  const videoUrl = video;

  return (
    <div>
      <div className="relative bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-6 md:px-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h6 className="text-4xl font-extrabold text-gray-600 mb-6">
              RRS Liquid Products
            </h6>
            <p className="text-lg text-gray-600 mb-4">
              R.R.S. Liquid Products is a company that specializes in the
              production and distribution of high-quality mineral water, ice
              cubes, food drinks, and beverages. Our products are made with the
              finest ingredients and undergo rigorous quality checks to ensure
              that they meet the highest standards of purity and taste. We have
              a wide range of products to choose from, including flavored water,
              sports drinks, and healthy beverage options.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our mineral water is sourced from natural springs and undergoes a
              thorough purification process to ensure that it is free from
              impurities and contaminants. Our ice cubes are made using
              state-of-the-art technology and are guaranteed to be crystal clear
              and free of any unwanted flavors or odors. In addition to our
              liquid products, we also offer a variety of food and drink
              options, including smoothies, shakes, and energy drinks. Our team
              of experienced professionals is dedicated to delivering the best
              products and services to our customers, and we are committed to
              providing high-quality, delicious, and refreshing products that
              meet the needs of our customers
            </p>
            <p className="text-lg text-gray-600 mb-6">
              If you are looking for a reliable and trusted source for all of
              your liquid product needs, look no further than RS 1 Liquid
              Products. Contact us today to learn more about our products and
              services
            </p>
            <motion.button
              className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-blue-700 flex items-center transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <BsArrowRight className="ml-2" />
            </motion.button>
          </motion.div>

          {/* Image and Video Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-xl group">
              {/* Image */}
              <motion.img
                src={aboutImage}
                alt="About Us"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:opacity-0"
              />
              {/* Video */}
              <motion.video
                src={videoUrl}
                className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
                autoPlay
                loop
                muted
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Devision />
    </div>
  );
};

export default MilkAbout;
