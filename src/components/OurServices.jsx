import React from "react";
import { HeroSectionServicesList } from "../constants";
import { Link } from "react-router-dom";
const OurServices = () => {
  return (
    <div className="max-w-7xl m-auto mt-18">
      <div className="flex justify-center relative">
      <h1 className="text-center text-5xl font-display font-semibold p-6">
        Our Services
      </h1>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-8">
        {HeroSectionServicesList.map((item, i) => (
          <div key={i} className="relative p-4 lg:p-2 md:p-2 cursor-pointer">
            <img src={item.image} alt="" className="" />
            <p className="absolute bottom-10 left-10 border-l-8 border-white text-white p-2 text-xl backdrop-blur-sm rounded-md">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <Link to={'/services'}>
          <button className="max mt-16 pl-8 pr-8 p-4 border-2 border-red-400 rounded-sm hover:bg-red-400 inset-ring-red-400 text-semibold cursor-pointer">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
