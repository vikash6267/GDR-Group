import { motion } from "framer-motion";
import { FaBuilding, FaThumbsUp, FaUsers } from "react-icons/fa";
import gifimg from "./hello.gif";

import { CountUpCard } from "./CountCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const leftItemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const rightItemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export default function MainSection() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="bg-gray-100">
        <motion.div
          className="container mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="lg:w-1/2 lg:mr-4" variants={leftItemVariants}>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              Explore Some Of The Best Properties In Your Area
            </h1>
            <p className="text-gray-600 mb-6 text-center lg:text-left">
              Discover premium residences that best suit your needs and
              lifestyle, from elegance to modern luxury.
            </p>
            {/* <motion.div
							className="flex items-center bg-white shadow-md rounded-lg overflow-hidden"
							variants={leftItemVariants}
						>
							<input
								type="text"
								placeholder="Search properties in your city"
								className="flex-grow px-4 py-2 border-none focus:outline-none"
							/>
							<button className="bg-blue-500 text-white px-4 py-2">
								<FaSearch className="h-5 w-5" />
							</button>
						</motion.div> */}
            <motion.div
              className="mt-8 grid grid-cols-3 gap-2 md:gap-8 text-center"
              variants={leftItemVariants}
            >
              <CountUpCard icon={FaBuilding} end={1500} label="Apartments" />
              <CountUpCard icon={FaUsers} end={1000} label="Customers" />
              <CountUpCard icon={FaThumbsUp} end={2500} label="Good reviews" />
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end"
            variants={rightItemVariants}
          >
            <img
              src={gifimg}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
