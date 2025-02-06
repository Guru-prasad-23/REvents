import OurServices from "../components/OurServices";
import OurGallery from "../components/OurGallery";
import Testimonials from "../components/Testimonials";
import video1 from "../assets/RenderB1.mp4";
import { motion } from "framer-motion";

const HomeScreen = () => {
  return (
    <motion.div
      className="max-w-7xl m-auto mt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-col gap-6 mt-16 items-center bg-gradient-to-r from-blue-900 via-pink-500 to-violet-600 bg-clip-text font-extrabold text-transparent"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero_main_title">R events.</h1>
        <p className="text-xl lg:text-6xl md:text-4xl text-center font-display lg:w-2xl md:w-2xl font-semibold text-black">
          Crafting Unforgettable Moments, One Event at a Time!
        </p>
        <p className="text-center w-[250px] lg:w-4xl md:w-[300px]">
          From dreamy weddings to lively birthday celebrations, we turn your
          vision into reality with flawless execution and creative excellence
        </p>
      </motion.div>
      <motion.div
        className="lg:mt-26 md:mt-24 mt-12 lg:rounded-2xl md:rounded-2xl lg:border-4 md:border-2 lg:border-indigo-300 md:border-indigo-300 lg:p-4 md:p-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          src={video1}
          autoPlay
          loop
          muted
          playsInline
          className="lg:rounded-2xl md:rounded-2xl"
        ></video>
      </motion.div>
      <OurServices />
      <OurGallery />
      <Testimonials />
    </motion.div>
  );
};

export default HomeScreen;
