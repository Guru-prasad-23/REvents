import React, { useRef, useState } from "react";
import logo from "../assets/Rlogo.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Footer = () => {
  const form = useRef();
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your Email address");
    emailjs
      .sendForm(
        "service_ftrysoo",
        "template_9tiheul",
        form.current,
        "FrebjWBHhQMVbIwdf"
      )
      .then(
        () => {
          toast.success("Thank you for subscribing us!");
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-black/80 mt-28 text-white">
      <div className="pt-16 p-6 max-w-7xl m-auto">
        <div className="grid grid-cols-1 gap-10 lg:gap-0 md:gap-0 md:grid-cols-3 lg:grid-cols-4 grid-row-2">
          <div className="">
            <img src={logo} alt="" className="w-48" />
          </div>
          <div>
            <p>Address Section</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <h1 className="text-sm cursor-pointer">Home</h1>
            <h1 className="text-sm cursor-pointer">About</h1>
            <h1 className="text-sm cursor-pointer">Services</h1>
            <h1 className="text-sm cursor-pointer">Contact Us</h1>
            <h1 className="text-sm cursor-pointer">FAQ</h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">
              Subscribe to Our Newsletter
            </h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              action=""
              className="bg-gradient-to-l from-blue-700 via-pruple-600 to-pink-600 p-2 rounded-md flex gap-2 flex-col"
            >
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="user_email"
                placeholder="Email address"
                className="bg-white w-full text-black p-4 rounded-md outline-none"
              />
              <button
                type="submit"
                className="bg-red-500 w-full flex-1 p-2 rounded font-semibold cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
