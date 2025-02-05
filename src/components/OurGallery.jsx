import React from "react";
import { gallery } from "../constants";
import { Link } from "react-router-dom";

const OurGallery = () => {
  return (
    <div className="mt-28">
      <h1 className="text-center text-5xl font-display font-semibold p-6">
        Our Gallery
      </h1>
      <div className="mt-12 grid grid-cols-3 grid-rows-2 gap-4">
        {gallery.slice(8, 14).map((item, id) => (
          <div key={id} className="w-98 h-68 ">
            <Link to={'/gallery'}>
              <img
                src={item.type === "video" ? null : item.src}
                alt=""
                className="h-full w-full object-cover rounded-sm cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGallery;
