import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Rlogo.png";
import { RiMenu5Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const location = useLocation();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleNavClick = () => {
    setOpenMobileMenu(false);
  };

  return (
    <div className="z-50 lg:h-18 md:h-18 lg:mt-8 h-14 mt-6 fixed lg:relative md:relative top-0 w-full">
      <nav className="lg:max-w-7xl md:max-w-7xl w-full lg:m-auto md:m-auto flex gap-6 p-2 pl-6 pr-6 lg:items-center md:items-center items-center justify-between bg-white lg:rounded-md md:rounded-md">
        <div className="hidden lg:flex md:flex gap-6 items-center p-2 flex-1 justify-end">
          <Link
            to="/"
            onClick={handleNavClick}
            className={
              location.pathname === "/"
                ? "text-xl font-semibold p-2 rounded-md bg-white text-black/50"
                : "text-xl font-semibold p-2 rounded-md"
            }
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleNavClick}
            className={
              location.pathname === "/about"
                ? "text-xl font-semibold p-2 rounded-md bg-white text-black/50"
                : "text-xl font-semibold p-2 rounded-md"
            }
          >
            About
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/" onClick={handleNavClick}>
            <img src={logo} alt="Logo" className="w-18" />
          </Link>
        </div>
        <div className="hidden lg:flex md:flex gap-6 items-center p-2 flex-1">
          <Link
            to="/gallery"
            onClick={handleNavClick}
            className={
              location.pathname === "/gallery"
                ? "text-xl font-semibold p-2 rounded-md bg-white text-black/50"
                : "text-xl font-semibold p-2 rounded-md"
            }
          >
            Gallery
          </Link>
          <Link
            to="/services"
            onClick={handleNavClick}
            className={
              location.pathname === "/services"
                ? "text-xl font-semibold p-2 rounded-md bg-white text-black/50"
                : "text-xl font-semibold p-2 rounded-md"
            }
          >
            Services
          </Link>
        </div>
        <div>
          {openMobileMenu ? (
            <ImCross
              onClick={() => setOpenMobileMenu(false)}
              className="lg:hidden md:hidden text-3xl cursor-pointer"
            />
          ) : (
            <RiMenu5Fill
              onClick={() => setOpenMobileMenu(true)}
              className="lg:hidden md:hidden text-3xl cursor-pointer"
            />
          )}
        </div>
      </nav>
      <AnimatePresence>
        {openMobileMenu && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-14 left-0 w-full bg-white shadow-md"
            onClick={() => setOpenMobileMenu(false)}
          >
            <div className="flex flex-col items-center gap-2 p-4">
              <Link to="/" onClick={handleNavClick}>
                Home
              </Link>
              <Link to="/services" onClick={handleNavClick}>
                Services
              </Link>
              <Link to="/about" onClick={handleNavClick}>
                About Us
              </Link>
              <Link to="/gallery" onClick={handleNavClick}>
                Gallery
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
