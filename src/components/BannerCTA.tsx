import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function BannerCTA() {
  return (
    <div className="w-full px-20 p-10 bg-primaryAccent flex flex-wrap md:justify-between justify-center text-center  items-center mt-20 my-10 md:gap-0 gap-5">
      <div>
        <img src="shield.png" alt="" width={100} />
      </div>
      <div>
        <h3 className=" text-[30px] text-black">
          Deliver the best Marketing services
        </h3>
      </div>
      <div>
        <button className=" shadow-2xl flex items-center justify-between bg-primary  rounded-full px-3 py-3 text-white mt-5">
          <p className="pr-5 pl-3 text-xl">Get Started</p>
          <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full stroke-black fill-black ">
            <FaArrowRight color="#fff" />
          </div>
        </button>
      </div>
    </div>
  );
}
