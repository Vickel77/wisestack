import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaSlack,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" md:text-left text-center md:mt-[50px] mt-0 w-[100vw] min-h-[120vh]  md:min-h-[80vh] ] bg-footer-bg-image bg-cover flex justify-center items-end pb-10 text-white">
      <div className="w-[60%]">
        <div className="flex  mx-auto flex-wrap gap-3 md:justify-between  justify-center   ">
          <ul className="md:mb-0 mb-5 w-[50%] md:w-auto">
            <h6>Useful Links</h6>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
          </ul>
          <ul className="md:mb-0 mb-5 w-[50%] md:w-auto">
            <h6>Support</h6>
            <li>
              <a href="mailto:wisestackpromo@gmail.com">Help</a>
            </li>
          </ul>
          <ul className="md:mb-0 mb-5 w-[50%] md:w-auto">
            <h6>Resources</h6>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
          </ul>
          <ul className="md:mb-0 mb-5 w-[50%] md:w-auto">
            <h6>Contact Us</h6>
            <li>
              <a href="mailto:wisestackpromo@gmail.com">
                wisestackpromo@gmail.com
              </a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
          </ul>
        </div>
        <div className="divide-x-2 divide-white w-full mt-10 border-t-[1px] border-white" />
        <div className="py-5 flex gap-2 flex-wrap md:justify-between justify-center items-center ">
          <div> © Copyright 2024</div>
          <div className="flex gap-3">
            <a className="hover:opacity-80 transition" href="">
              {" "}
              <FaTwitter size={25} />{" "}
            </a>
            <a className="hover:opacity-80 transition" href="">
              {" "}
              <FaFacebook size={25} />{" "}
            </a>
            <a
              className="hover:opacity-80 transition"
              href="https://www.instagram.com/wisestack?igsh=M3Q5dm9rOW9heHNu"
            >
              <FaInstagram size={25} />{" "}
            </a>
            <a className="hover:opacity-80 transition" href="">
              {" "}
              <FaSlack size={25} />{" "}
            </a>
            <a className="hover:opacity-80 transition" href="">
              {" "}
              <FaWhatsapp size={25} />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
