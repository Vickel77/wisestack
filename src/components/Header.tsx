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
      <div className="w-full h-[80vh] flex justify-between items-center ">
        <div className=" flex justify-center">
          <div className="w-full">
            <h1>Marketing Done Smoothly</h1>

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
                  src="customer-dp.png"
                  alt=""
                  width={50}
                  data-aos="fade-down"
                  data-aos-delay={200}
                />
                <img
                  className="absolute left-16 border-4 border-background rounded-full"
                  src="customer-dp.png"
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
        <div className="w-[50%] relative">
          <div
            data-aos="fade-down"
            className="h-[60vh] w-2/3 bg-cover relative rounded-[200px]  overflow-hidden  shadow-lg flex justify-center items-start header-right-img   "
          >
            <img src="hero-img.jpg" alt="" />
          </div>
          <div className="h-3 w-3 shadow-md rounded-md  absolute top-8 -left-3 "></div>
          <div className="h-3 w-3 shadow-md rounded-md absolute top-2 -right-3"></div>
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
