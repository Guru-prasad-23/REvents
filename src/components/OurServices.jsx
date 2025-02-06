import React from "react";
import { motion } from "framer-motion";
import { HeroSectionServicesList } from "../constants";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const OurServices = () => {
  return (
    <motion.div
      className="max-w-7xl m-auto mt-18"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="flex justify-center relative">
        <motion.h1
          className="text-center text-5xl font-display font-semibold p-6"
          variants={titleVariants}
        >
          Our Services
        </motion.h1>
      </div>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-8"
        variants={containerVariants}
      >
        {HeroSectionServicesList.map((item, i) => (
          <motion.div
            key={i}
            className="relative p-4 lg:p-2 md:p-2 cursor-pointer"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.img
              src={item.image}
              alt=""
              className="rounded-md shadow-lg"
            />
            <motion.p
              className="absolute bottom-10 left-10 border-l-8 border-white text-white p-2 text-xl backdrop-blur-sm rounded-md"
              variants={textVariants}
            >
              {item.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="w-full flex items-center justify-center">
        <Link to={"/services"}>
          <motion.button
            className="mt-16 pl-8 pr-8 p-4 border-2 border-red-400 rounded-sm hover:bg-red-400 inset-ring-red-400 text-semibold cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotate: 3,
              backgroundColor: "#F87171",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            View More
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default OurServices;
