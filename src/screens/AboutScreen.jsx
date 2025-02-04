import React from "react";
import caro from "../assets/caro2.jpg";
import { Link } from "react-router-dom";
import about from "../assets/About.jpg";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const AboutScreen = () => {
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
            About Us
          </h1>
        </div>
        <div className="flex text-white gap-4 z-20">
          <Link to={"/"} className="hover:underline hover:text-purple-500">
            <span>Home </span>
          </Link>
          <p>/</p>
          <span>About</span>
        </div>
      </div>
      <div className="max-w-7xl m-auto mt-18 flex flex-col justify-center items-center gap-6 text-justify">
        <h1 className=" text-center text-4xl lg:text-6xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-900 via-pink-500 to-violet-600 bg-clip-text text-transparent">
          R Events.
        </h1>
        <p className="text-justify lg:w-1/2 p-8 lg:p-0 md:p-0 md:w-1/2 text-black/70 text-xl">
          R Events is a premier tent house supplier and event management company
          committed to turning your special occasions into unforgettable
          experiences. From weddings and birthday parties to grand celebrations,
          we specialize in all kinds of decorations, venue arrangements, and
          event planning with meticulous attention to detail. Our team ensures a
          seamless and stress-free experience, offering innovative themes,
          elegant setups, and high-quality tenting solutions tailored to your
          needs. Whether it’s an intimate gathering or a large-scale event, R
          Events guarantees excellence, creativity, and professionalism in every
          celebration we curate.
        </p>
      </div>
      <div className="max-w-7xl m-auto mt-18 flex flex-col justify-center items-center gap-6 text-justify">
        <h1 className="text-center text-4xl lg:text-6xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-900 via-pink-500 to-violet-600 bg-clip-text text-transparent">
          Meet Our Event Planner
        </h1>
        <div className="flex w-full lg:pl-8 lg:pr-10 flex-col justify-center items-center lg:flex-row md:flex-row mt-14 gap-4 lg:gap-8 md:gap-8">
          <img src={about} alt="about" className="lg:w-1/2 md:w-1/2 w-screen p-8 lg:p-0 md:p-0 rounded-md" />
          <p className="text-justify lg:w-1/2 p-8 lg:p-0 md:p-0 text-black/70 text-xl">
            Our event planner is a highly skilled and dedicated professional
            with a strong background in event management. As a graduate with
            expertise in organizing flawless events, he brings creativity,
            precision, and a client-focused approach to every project. His
            commitment to excellence ensures that each event is executed
            seamlessly, from planning to execution, leaving clients with
            unforgettable memories. With a passion for creating unique
            experiences, he strives to bring every vision to life with elegance
            and perfection.
          </p>
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

export default AboutScreen;
