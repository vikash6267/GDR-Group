import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import video from "../../../assests/video.mp4";
const AboutHome = () => {
  const aboutImage =
    "https://img.freepik.com/free-vector/building-house-structure-flat-design_23-2147561234.jpg?w=740&t=st=1724415492~exp=1724416092~hmac=81b1aaf43aa647ef069800026a0d4aa27bc01a873317423351151fa74ab8c3a0";
  const videoUrl = video; // Replace with your video URL

  return (
    <div className="relative bg-gradient-to-r py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">GDR Group 72</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            GDR Group 72 is a dynamic conglomerate engaged in diverse sectors
            including Agriculture, Dairy, Farm Land, and Commercial Property.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to cultivate opportunities that foster growth and
            development in rural communities, driving innovation and excellence
            across our ventures.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With a deep commitment to sustainability and progress, we aim to
            empower the future through our strategic initiatives and dedicated
            efforts.
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
  );
};

export default AboutHome;
