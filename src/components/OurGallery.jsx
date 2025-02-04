import React from "react";
import { Gallery } from "../constants";
const OurGallery = () => {
  return (
    <div className="max-w-7xl m-auto mt-18">
      <div className="flex justify-center relative">
        <h1 className="font-display lg:text-5xl md:text-3xl text-2xl font-bold text-center w-max">
          Our Gallery
        </h1>
      </div>
      <div className="lg:mt-28 md:mt-24 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-8">
        {Gallery.map((item,i) => (
          <div key={i} className="relative lg:border-2 lg:border-slate-300 md:border-2 md:border-slate-300 p-4 lg:p-2 md:p-2 lg:rounded-2xl md:rounded-2xl hover:border-indigo-400 transition-border duration-400 cursor-pointer">
            <img
              src={item.image}
              alt=""
              className="lg:rounded-xl md:rounded-xl rounded-md mix-blend-multiply"
            />
            <p className="absolute bottom-10 left-10 border-l-8 border-white text-white p-2 text-xl backdrop-blur-sm rounded-md">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGallery;
