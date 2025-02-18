import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, useScroll } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ToastContainer />
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      ></motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <ScrollToTop />
      </motion.div>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
