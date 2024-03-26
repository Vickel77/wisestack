import React from "react";
import { FaArrowRight } from "react-icons/fa";
import FiveStar from "./FiveStar";
import Navbar from "./Navbar";
function Header() {
  const brands = [
    "brands/apple.png",
    "brands/meetup.png",
    "brands/search.png",
    "brands/slack.png",
    "brands/tiktok.png",
    "brands/twitter.png",
  ];

  return (
    <div className="w-full ">
      <Navbar />
      <div className="w-full lg:h-[70vh] h-[auto] flex flex-wrap justify-between items-center mt-0 md:mt-20  ">
        <div className=" md:w-[50%] w-full pt-10 flex justify-between items-center">
          <div>
            <h1 className="text-center text-[2.5rem] md:text-[4rem] md:text-left">
              Wise<span className="text-primary">Stack</span> <br /> Solution
            </h1>
            <sub className="text-2xl">
              Marketing Done Smoothly<span className="text-6xl">...</span>
            </sub>

            <div className="flex items-center justify-center md:justify-start gap-3  mt-5 mb-10 ">
              <a href="mailto:wisestackpromo@gmail.com">
                <button
                  data-aos="fade-right"
                  className=" transition-all shadow-2xl flex items-center justify-between bg-black  rounded-full px-3 py-3 text-white "
                >
                  <p className="pr-5 pl-3 text-xl">Get Started</p>
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full stroke-black fill-black ">
                    <FaArrowRight color="#fff" />
                  </div>
                </button>
              </a>
              <a href="#services">
                <b className="underline">Our Features</b>
              </a>
            </div>

            <div className="rating flex items-center justify-center md:justify-start">
              <div className="h-20 w-[130px] flex  items-center relative">
                <img
                  className="absolute border-4 border-background rounded-full"
                  src="customer-dp.png"
                  alt=""
                  width={50}
                  data-aos="fade-down"
                  data-aos-delay={100}
                />
                <img
                  className="absolute left-8 border-4 border-background rounded-full"
                  src="testimony1.png"
                  alt=""
                  width={50}
                  data-aos="fade-down"
                  data-aos-delay={200}
                />
                <img
                  className="absolute left-16 border-4 border-background rounded-full"
                  src="testimony3.png"
                  alt=""
                  width={50}
                  data-aos="fade-down"
                  data-aos-delay={300}
                />
              </div>
              <div>
                <div className="flex gap-3">
                  <FiveStar /> 5.0
                </div>
                <div>From 100+ Clients</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full relative mt-10 md:mt-0 flex justify-center items-center">
          <div className=" ounded-md  absolute top-2 right-5">
            <img src="_header-dots.png" alt="" width={100} />
          </div>
          <div
            data-aos="fade-down"
            className="h-auto lg:h-[70vh]  w-2/3 bg-cover relative rounded-[200px]  overflow-hidden  shadow-lg flex justify-center md:items-start items-center header-right-img"
          >
            <img src="header-image.jpg" alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={500}
            className=" shadow-lg rounded-md  absolute  -bottom-5 left-5 md:bottom-8 md:-left-3 "
          >
            <img src="_header-rating.png" alt="" width={150} />
          </div>
        </div>
      </div>
      <div
        id="about"
        className="w-full flex justify-between mt-20 px-10 md:px-0"
      >
        {brands.map((brand, idx) => (
          <img
            key={idx}
            data-aos-delay={100 * idx}
            data-aos="fade-in"
            src={brand}
            width={50}
            className="w-8 md:w-[50px]"
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
