import React from "react";
import { useState, useEffect } from "react";
import "./../index.css";
import video1 from '../assets/RenderB1.mp4'
import OurGallery from "../components/OurGallery";
import Testimonials from "../components/Testimonials";


const HomeScreen = () => {
  return (
    <div className="max-w-7xl m-auto mt-32">
      <div className="flex flex-col gap-6 mt-16 items-center bg-gradient-to-r from-blue-900 via-pink-500 to-violet-600 bg-clip-text font-extrabold text-transparent">
        <h1 className="hero_main_title">R events.</h1>
        <p className="text-xl lg:text-6xl md:text-4xl text-center font-display lg:w-2xl md:w-2xl font-semibold text-black">
          Crafting Unforgettable Moments, One Event at a Time!
        </p>
        <p className="text-center w-[250px] lg:w-4xl md:w-[300px]">
          From dreamy weddings to lively birthday celebrations, we turn your
          vision into reality with flawless execution and creative excellence
        </p>
      </div>
      <div className="lg:mt-26 md:mt-24 mt-12 lg:rounded-2xl md:rounded-2xl lg:border-4 md:border-2 lg:border-indigo-300 md:border-indigo-300 lg:p-4 md:p-4 ">
        <video src={video1} autoPlay loop muted playsInline className="lg:rounded-2xl md:rounded-2xl">
        </video>
      </div>
      <OurGallery />
      <Testimonials/>
    </div>
  );
};

export default HomeScreen;
