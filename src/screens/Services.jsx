import React from "react";
import { ServicesList } from "../constants";
import { AdditionalServices } from "../constants";
import { CateringServices } from "../constants";
import { Link } from "react-router-dom";
import caro from "../assets/caro1.jpg";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Services = () => {
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
            Our Services
          </h1>
        </div>
        <div className="flex text-white gap-4 z-20">
          <Link to={"/"} className="hover:underline hover:text-purple-500">
            <span>Home </span>
          </Link>
          <p>/</p>
          <span>Services</span>
        </div>
      </div>
      <div className="lg:max-w-7xl md:max-w-7xl m-auto">
        <div className="w-full">
          <div className="mt-12 flex flex-col gap-4 font-serif justify-center lg:items-center md:items-center p-2">
            <h1 className="text-xl lg:text-3xl md:text-2xl text-white p-2 bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 rounded-full pl-6 pr-6">
              Our Specialisations
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-2 md:gap-2 mt-6">
              {ServicesList.map((item, i) => (
                <div
                  key={i}
                  className="w-full lg:min-w-[300px] md:min-w-[300px] text-sm border-l-6 lg:border-l-6 p-2 lg:pl-4 lg:p-2 md:pl-4 md:p-2  lg:border md:border border-b lg:rounded-md md:rounded-md border-purple-600 hover:border-l-2 hover:border-r-6 transition-border duration-200"
                >
                  <p className="">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-4 font-serif justify-center lg:items-center md:items-center p-6">
            <h1 className="text-xl lg:text-3xl md:text-2xl p-2 bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 rounded-full text-white pl-6 pr-6">
              Additional Services
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-2 md:gap-2 mt-6">
              {AdditionalServices.map((item, i) => (
                <div
                  key={i}
                  className="w-full lg:min-w-[300px] md:min-w-[300px] text-sm border-l-6 lg:border-l-6 p-2 lg:pl-4 lg:p-2 md:pl-4 md:p-2  lg:border md:border border-b lg:rounded-md md:rounded-md border-purple-600 hover:border-l-2 hover:border-r-6 transition-border duration-200"
                >
                  <p className="">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-4 font-serif justify-center lg:items-center md:items-center p-6">
            <h1 className="text-xl lg:text-3xl md:text-2xl p-2 bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 rounded-full text-white pl-6 pr-6">
              Catering Services
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-2 md:gap-2 mt-6">
              {CateringServices.map((item, i) => (
                <div
                  key={i}
                  className="w-full lg:min-w-[300px] md:min-w-[300px] text-sm border-l-6 lg:border-l-6 p-2 lg:pl-4 lg:p-2 md:pl-4 md:p-2  lg:border md:border border-b lg:rounded-md md:rounded-md border-purple-600 hover:border-l-2 hover:border-r-6 transition-border duration-200"
                >
                  <p className="">{item}</p>
                </div>
              ))}
            </div>
          </div>
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

export default Services;
