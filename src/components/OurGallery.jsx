import React from "react";
import { gallery } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OurGallery = () => {
  return (
    <div className="mt-28">
      <h1 className="text-center text-5xl font-display font-semibold p-6">
        Our Gallery
      </h1>
      <div className="mt-12 flex flex-col justify-center items-center lg:grid lg:grid-cols-3 md:grid-cols-2 grid-rows-2 gap-4 place-content-center">
        {gallery.slice(8, 14).map((item, id) => (
          <motion.div
            key={id}
            className="w-98 h-68 flex-1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
          >
            <Link to={"/gallery"}>
              <img
                src={item.type === "video" ? null : item.src}
                alt=""
                className="h-full w-full object-cover rounded-sm cursor-pointer"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurGallery;
