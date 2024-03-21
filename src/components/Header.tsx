import React from "react";
import { FaArrowRight } from "react-icons/fa";
import FiveStar from "./FiveStar";
function Header() {
  return (
    <div className="flex justify-between">
      <div className="w-[50%] flex justify-center">
        <div className="w-1/3">
          <h1>Marketing Done Smoothly</h1>

          <div>
            <button className=" shadow-2xl flex items-center justify-between bg-black  rounded-full px-3 py-3 text-white mt-5">
              <p className="pr-5 pl-3 text-xl">Get Started</p>
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full stroke-black fill-black ">
                <FaArrowRight color="#333" />
              </div>
            </button>
            <b className="underline">Our Features</b>
          </div>

          <div className="rating">
            <div>
              <img src="customer-dp.png" alt="" />
              <img src="customer-dp.png" alt="" />
              <img src="customer-dp.png" alt="" />
            </div>
            <div>
              <div>
                <FiveStar /> 5.0
              </div>
              <div>From 100+ Clients</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] relative">
        <div className="bg-hero-image bg-cover relative">
          <div className="h-3 w-3 shadow-md rounded-md  absolute top-8 -left-3 "></div>
          <div className="h-3 w-3 shadow-md rounded-md absolute top-2 -right-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
