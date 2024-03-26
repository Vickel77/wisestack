"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";

function Navbar() {
  // const router = useRouter();
  const pathname = usePathname();
  const navLinks = ["Home", "About", "Services", "Portfolio", "Blog"];
  const _navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  console.log("pathname ", pathname);
  return (
    <div className="w-full mt-5 px-5 flex justify-between items-center border-b-2 border-gray-300">
      <div className="logo md:w-auto w-full md:block flex justify-center md:mt-0 mt-32">
        {/* Wise<span className="text-primary">Stack </span> */}
        <Logo />
      </div>
      <div className="nav-links hidden md:block">
        {_navLinks.map((x, idx) => (
          <Link
            key={idx}
            className={`px-3 py-7 ${
              pathname === x.path.toLowerCase()
                ? "border-b-2 border-primary"
                : ""
            }`}
            onClick={() => console.log("clicked ", x.path + " " + pathname)}
            href={`#${x.path}`}
          >
            {x.name}
          </Link>
        ))}
      </div>
      <div className="cta hidden md:block">
        <button className="bg-black px-5 py-3 text-white">Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar;
