import React from "react";
import { ServicesList } from "../constants";
import { AdditionalServices } from "../constants";
import { CateringServices } from "../constants";
import { Link } from "react-router-dom";
import caro from "../assets/caro1.jpg";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

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

      <div className="max-w-screen lg:max-w-7xl place-content-center flex flex-col justify-center items-center  m-auto mt-28 lg:grid md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
        {ServicesList.map((item, id) => (
          <motion.div
            key={id}
            className=" w-88 h-max flex flex-col gap-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={item.image}
              alt="services"
              className="w-88 h-68 object-cover"
            />
            <p className="text-3xl font-extrabold font-display">{item.title}</p>
            <p className="text-black/70 font-serif">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="m-w-screen lg:max-w-7xl lg:m-auto lg:mt-28 mt-14">
        <h1 className="text-center text-2xl font-semibold pl-4 pr-4 p-2 m-auto rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-max">
          Additional Services
        </h1>
        <div className="flex gap-6 items-center justify-center mt-14 flex-wrap lg:flex-nowrap md:flex-nowrap">
          {AdditionalServices.map((item, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold border-b p-2 lg:border-none md:border-none">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="m-w-screen lg:max-w-7xl lg:m-auto lg:mt-28 mt-14">
        <h1 className="text-center text-2xl font-semibold pl-4 pr-4 p-2 m-auto rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-max">
          Catering Services
        </h1>
        <div className="flex gap-6 items-center justify-center mt-14 flex-wrap lg:flex-nowrap md:flex-nowrap">
          {CateringServices.map((item, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold border-b p-2 lg:border-none md:border-none">
                {item.name}
              </p>
            </motion.div>
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

export default Services;
