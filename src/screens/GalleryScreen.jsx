import React, { useState } from "react";
import { motion } from "framer-motion";
import caro from "../assets/caro3.jpg";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaTimes } from "react-icons/fa";
import {
  FaXTwitter,
  FaFacebookF,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { gallery } from "../constants";

const GalleryScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const handleNext = () => {
    if (selectedItem) {
      const currentIndex = gallery.findIndex(
        (item) => item.id === selectedItem.id
      );
      const nextIndex = (currentIndex + 1) % gallery.length;
      setSelectedItem(gallery[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (selectedItem) {
      const currentIndex = gallery.findIndex(
        (item) => item.id === selectedItem.id
      );
      const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
      setSelectedItem(gallery[prevIndex]);
    }
  };

  return (
    <div className="w-screen mt-6">
      {/* Header Section */}
      <div className="relative h-60 md:h-80 bg-black flex flex-col items-center justify-center gap-6">
        <img
          src={caro}
          alt=""
          className="w-full h-full absolute object-cover opacity-40"
        />
        <h1 className="font-display text-white text-xl md:text-3xl lg:text-5xl font-bold text-center relative">
          Our Gallery
        </h1>
        <div className="flex text-white gap-4 relative z-20">
          <Link to="/" className="hover:underline hover:text-purple-500">
            <span>Home</span>
          </Link>
          <p>/</p>
          <span>Gallery</span>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="p-4 max-w-7xl m-auto mt-6">
        <p className="text-center p-2 text-black/70 italic md:block hidden">
          *Tap on videos to play
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {gallery.map((item, id) => (
            <motion.div
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="relative overflow-hidden cursor-pointer"
              onClick={() => handleOpen(item)}
            >
              {item.type === "video" ? (
                <div className="relative">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover rounded-lg opacity-80"
                  />
                  <FaPlayCircle className="absolute inset-0 m-auto text-5xl" />
                </div>
              ) : (
                <img
                  src={item.src}
                  alt="Gallery"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-16 max-w-7xl m-auto flex gap-6 items-center justify-center">
        <a href="#">
          <FiInstagram className="text-3xl" />
        </a>
        <a href="#">
          <FaFacebookF className="text-3xl" />
        </a>
        <a href="#">
          <FaXTwitter className="text-3xl" />
        </a>
      </div>

      {/* Fullscreen Preview */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
            onClick={handleClose}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-6 text-white text-3xl cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            <FaChevronLeft />
          </button>
          <div
            className="max-w-screen-md w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "video" ? (
              <video
                src={selectedItem.src}
                className="w-full h-auto rounded-lg"
                controls
              />
            ) : (
              <img
                src={selectedItem.src}
                alt="Selected Item"
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
          <button
            className="absolute right-6 text-white text-3xl cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryScreen;
