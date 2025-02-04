import React from "react";
import caro from "../assets/caro3.jpg";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const GalleryScreen = () => {
  return (
    <div className="w-screen mt-6">
      <div className="relative h-90 bg-black flex flex-col items-center justify-center gap-6">
        <img
          src={caro}
          alt=""
          className="w-full h-full absolute object-cover opacity-40"
        />
        <div className="flex justify-center relative">
          <h1 className="font-display text-white lg:text-5xl text-2xl md:text-3xl font-bold text-center w-max">
            Our Gallery
          </h1>
        </div>
        <div className="flex text-white gap-4 z-20">
          <Link to={"/"} className="hover:underline hover:text-purple-500">
            <span>Home </span>
          </Link>
          <p>/</p>
          <span>Gallery</span>
        </div>
      </div>
      <div className="mt-28 max-w-7xl m-auto flex gap-6 items-center justify-center">
        <a href="#">
          <FiInstagram className="text-4xl" />
        </a>
        <a href="#">
          <FaFacebookF className="text-4xl" />
        </a>
        <a href="#">
          <FaXTwitter className="text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default GalleryScreen;
