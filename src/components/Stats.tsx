import React, { useState } from "react";
import { FaAddressCard, FaDollarSign, FaAccusoft } from "react-icons/fa";

type StatInfo = {
  icon: React.JSX.Element;
  title: string;
  text: string;
};

export default function Stats() {
  const statInfo = [
    {
      icon: <FaAddressCard size={30} color="#1446A0" />,
      title: "Unique Selling Proposition (USP):",
      text: `
       Transforming Social Media Complexity into Seamless Success: At WiseStack, we go beyond mere management, we're your strategic partner in navigating the dynamic world of social media. With expertly curated content,
      `,
    },
    {
      icon: <FaDollarSign size={30} color="#1446A0" />,
      title: "Client Support:",
      text: `
       data-driven strategies, and unparalleled client support,
      `,
    },
    {
      icon: <FaAccusoft size={30} color="#1446A0" />,
      title: "Simplicity in Execution:",
      text: `
      we simplify the complexities of online presence, empowering your brand to thrive in the digital landscape. Trust WiseStack to turn your social media challenges into opportunities for seamless growth and success.
      `,
    },
  ];

  const statImages = ["prep-1.png", "prep-2.png", "prep-3.png"];

  const [isActive, setIsActive] = useState<number>(0);

  return (
    <div className="flex gap-8 w-full mt-[100px] min-h-[70vh]">
      <div className="md:w-[100%]">
        <div className="mb-10">
          <h2>Why choose us?</h2>
          <sub className="text-lg ">
            We provide a specific unique package for your marketing needs
          </sub>
        </div>
        <div>
          {statInfo.map((info, idx) => (
            <StatInfoCard
              isActive={isActive === idx}
              onClick={() => setIsActive(idx)}
              {...info}
              key={idx}
              id={idx}
            />
          ))}
        </div>
      </div>
      <div className="relative w-[100%] flex justify-center items-center ">
        {/* Using Image as Background */}
        {/* <div className="w-[40% , h-[400px]" style={{ background: `url(${statImages[isActive]})`, backgroundSize:"cover" }}></div> */}
        <img
          src="header-dots.png"
          alt=""
          data-aos="down"
          className="absolute right-20 bottom-0"
          width={100}
        />
        <div className="overflow-hidden  relative  rounded-3xl w-[50%] max-h-[60vh]">
          <img
            src={statImages[isActive]}
            alt="statistics"
            className="h-[100%] "
            style={{ aspectRatio: "3/1" }}
          />
        </div>
      </div>
    </div>
  );
}

const StatInfoCard = ({
  isActive,
  onClick,
  id,
  ...props
}: { isActive?: boolean; onClick?: () => void; id?: number } & StatInfo) => {
  const { icon, text, title } = props;
  return (
    <div
      className={`p-5 rounded-xl  ${
        isActive ? "bg-primaryAccent items-start" : "items-center"
      } flex gap-3    ${id === 1 && "my-3"}`}
      onClick={onClick}
    >
      <div className=" flex  p-3 rounded-full shadow-md bg-white">{icon}</div>
      <div className="text-left ">
        <h3>{title}</h3>
        {isActive && <p className="mt-3">{text}</p>}
      </div>
    </div>
  );
};
