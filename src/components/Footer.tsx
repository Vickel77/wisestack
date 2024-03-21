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
    <div className="mt-[50px] w-[100vw] min-h-[70vh] ] bg-footer-bg-image bg-cover flex justify-center items-end pb-10 text-white">
      <div className="w-[60%]">
        <div className="flex justify-between">
          <ul>
            <h6>Useful Links</h6>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
          <ul>
            <h6>Support</h6>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
          <ul>
            <h6>Resources</h6>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
          </ul>
          <ul>
            <h6>Company</h6>
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
        </div>
        <div className="divide-x-2 divide-white w-full my-10" />
        <div className="py-5 flex justify-between items-center ">
          <div>Copyright 2024</div>
          <div className="flex gap-3">
            <a href="">
              {" "}
              <FaTwitter size={25} />{" "}
            </a>
            <a href="">
              {" "}
              <FaFacebook size={25} />{" "}
            </a>
            <a href="">
              <FaInstagram size={25} />{" "}
            </a>
            <a href="">
              {" "}
              <FaSlack size={25} />{" "}
            </a>
            <a href="">
              {" "}
              <FaWhatsapp size={25} />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
