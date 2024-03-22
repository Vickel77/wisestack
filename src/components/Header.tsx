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
      <div className="w-full h-[80vh] sm:h-[auto] flex flex-wrap justify-between items-center ">
        <div className=" md:w-[50%] sm:w-full sm:pt-10 flex justify-center :items-center">
          <div className="]">
            <h1 className="sm:text-center sm:text-center sm:text-[2.5rem]">
              Marketing Done Smoothly
            </h1>

            <div className="flex items-center gap-3  mt-5 mb-10 ">
              <button
                data-aos="fade-right"
                className=" shadow-2xl flex items-center justify-between bg-black  rounded-full px-3 py-3 text-white "
              >
                <p className="pr-5 pl-3 text-xl">Get Started</p>
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full stroke-black fill-black ">
                  <FaArrowRight color="#fff" />
                </div>
              </button>
              <b className="underline">Our Features</b>
            </div>

            <div className="rating flex items-center">
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
        <div className="w-[50%] ms:w-full relative  flex justify-center items-center">
          <div className=" ounded-md  absolute top-2 right-5">
            <img src="header-dots.png" alt="" width={100} />
          </div>
          <div
            data-aos="fade-down"
            className="sm:h-auto md:shrink-0 h-[60vh]  w-2/3 bg-cover relative rounded-[200px]  overflow-hidden  shadow-lg flex justify-center items-start header-right-img   "
          >
            <img src="header-image.jpg" alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={500}
            className=" shadow-lg rounded-md   absolute sm:-bottom-5 sm:-left-10 bottom-8 -left-3 "
          >
            <img src="header-rating.png" alt="" width={150} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-20">
        {brands.map((brand, idx) => (
          <img
            key={idx}
            data-aos-delay={100 * idx}
            data-aos="fade-in"
            src={brand}
            width={50}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
