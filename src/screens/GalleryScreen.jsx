import React from "react";
import caro from "../assets/caro3.jpg";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { gallery } from "../constants";
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

      <div className="p-4 max-w-7xl m-auto mt-18">
        <p className="hidden lg:block md: blocktext-center p-4 text-black/70 font-style: italic ">
          *Hover to Play videos
        </p>
        <p className="lg:hidden md:hidden text-center p-4 text-black/70 font-style: italic ">
          *Click on videos to play
        </p>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {gallery.map((item, id) => (
            <div
              key={item.id}
              className={`relative overflow-hidden ${
                item.type === "video"
                  ? "col-span-2 row-span-2"
                  : "col-span-1 row-span-1"
              }`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover rounded-lg"
                  loop
                  playsInline
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => e.target.pause()}
                />
              ) : (
                <img
                  src={item.src}
                  alt="Gallery"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
          ))}
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
