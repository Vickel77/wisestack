import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function () {
  return (
    <div className="w-full p-7 bg-black flex justify-evenly ">
      <div>
        <img src="" alt="" />
      </div>
      <div className="w-10">
        <h4 className="text-white">Delivery the best MArketing services</h4>
      </div>
      <div>
        <button className=" shadow-2xl flex items-center justify-between bg-black  rounded-full px-3 py-3 text-white mt-5">
          <p className="pr-5 pl-3 text-xl">Get Started</p>
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full stroke-black fill-black ">
            <FaArrowRight color="#333" />
          </div>
        </button>
      </div>
    </div>
  );
}
