import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Rlogo.png";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div className="z-50 lg:h-18 md:h-18 lg:mt-8 h-14 mt-6 fixed lg:relative md:relative top-0">
      <nav className=" lg:max-w-7xl md:max-w-7xl w-screen lg:m-auto md:m-auto flex gap-6 p-2 pl-6 pr-6 lg:items-center md:items-center items-center justify-between inset-shadow-indigo-500 lg:justify-evenly md:justify-evenly bg-white lg:rounded-md md:rounded-md">
        <div className="hidden lg:flex md:flex gap-6 items-center  p-2 flex-1 rounded-l-full justify-end">
          <Link
            to={"/"}
            className={
              location.pathname === "/"
                ? "text-xl font-semibold  p-2 rounded-md bg-slate-10 bg-white text-black/50"
                : "text-xl font-semibold  p-2 rounded-md bg-slate-10"
            }
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className={
              location.pathname === "/about"
                ? "text-xl font-semibold  p-2 rounded-md bg-slate-10 bg-white text-black/50"
                : "text-xl font-semibold  p-2 rounded-md bg-slate-10"
            }
          >
            About
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-18" />
          </Link>
        </div>
        <div className=" hidden lg:flex md:flex gap-6 items-center p-2 flex-1 rounded-r-full">
          <Link to={"/gallery"} className={
              location.pathname === "/gallery"
                ? "text-xl font-semibold  p-2 rounded-md bg-slate-10 bg-white text-black/50"
                : "text-xl font-semibold  p-2 rounded-md bg-slate-10"
            }>
            Gallery
          </Link>
          <Link
            to={"/services"}
            className={
              location.pathname === "/services"
                ? "text-xl font-semibold  p-2 rounded-md bg-slate-10 bg-white text-black/50"
                : "text-xl font-semibold  p-2 rounded-md bg-slate-10"
            }
          >
            Services
          </Link>
        </div>
        <div>
          <RiMenu5Fill
            onClick={() => {
              setOpenMobileMenu(!openMobileMenu);
            }}
            className="lg:hidden md:hidden text-3xl cursor-pointer "
          />
        </div>
      </nav>
      <div
        className={
          openMobileMenu
            ? "flex flex-col top-24 bg-white w-screen items-center gap-2 p-4"
            : "hidden"
        }
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/gallery"}>Gallery</Link>
      </div>
    </div>
  );
};

export default Navbar;
