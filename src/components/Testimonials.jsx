import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import avatar from "animal-avatar-generator";

const testimonials = [
  {
    name: "John Doe",
    review: "Excellent service! Highly recommended.",
    stars: 5,
    image: "",
  },
  {
    name: "Sarah Smith",
    review: "A wonderful experience from start to finish.",
    stars: 4,
    image: "",
  },
  {
    name: "Michael Brown",
    review: "Great support and fast response times!",
    stars: 5,
    image: "",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const svg = avatar("your custom seed", { size: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    visible: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:gap-6 md:gap-6 gap-4 p-6">
        <div className="lg:border-r-2 border-pink-600 flex flex-col gap-2 h-max">
          <h1 className="text-center text-6xl bg-gradient-to-r from-blue-900 via-pink-500 to-violet-600 bg-clip-text font-extrabold text-transparent h-38">
            What Our <br />
            Clients Say.
          </h1>
          <p className="text-xl text-bold text-gray-700 text-center">
            See how we’ve made a difference for our customers.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              custom={direction}
              className="p-6 flex flex-col gap-4 lg:gap-0 items-center text-center"
            >
              <img
                src={testimonials[currentIndex].image || svg}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full border-2 border-gray-500"
              />
              <h3 className="text-sm font-semibold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-black text-sm lg:text-xl mt-2">
                {testimonials[currentIndex].review}
              </p>
              <div className="flex mt-3">
                {[...Array(testimonials[currentIndex].stars)].map(
                  (_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                  )
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full hover:bg-gray-500"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full hover:bg-gray-500"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
