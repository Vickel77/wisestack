import React, { useState } from "react";
import { FaAddressCard, FaDollarSign } from "react-icons/fa";

type StatInfo = {
  icon: React.JSX.Element;
  title: string;
  text: string;
};

export default function Stats() {
  const statInfo = [
    {
      icon: <FaAddressCard />,
      title: "",
      text: "",
    },

    {
      icon: <FaAddressCard />,
      title: "",
      text: "",
    },
    {
      icon: <FaAddressCard />,
      title: "",
      text: "",
    },
  ];

  const statImages = ["stat1.jpg", "stat2.jpg", "stat3.jpg"];

  const [isActive, setIsActive] = useState<number>(0);

  return (
    <div className="flex gap-8">
      <div className="md:w-[60%]">
        <div>
          <h3>Monthly Reports with statistical Reports</h3>
          <sub>
            We provide a specific unique package for your marketing needs
          </sub>
        </div>
        <div>
          {statInfo.map((info, idx) => (
            <StatInfoCard
              isActive={isActive === idx}
              onClick={() => setIsActive(idx)}
              {...info}
            />
          ))}
        </div>
      </div>
      <div className="relative">
        {/* Using Image as Background */}
        {/* <div className="w-[40% , h-[400px]" style={{ background: `url(${statImages[isActive]})`, backgroundSize:"cover" }}></div> */}
        <img src={statImages[isActive]} alt="statistics" />
      </div>
    </div>
  );
}

const StatInfoCard = ({
  isActive,
  onClick,
  ...props
}: { isActive?: boolean; onClick?: () => void } & StatInfo) => {
  const { icon, text, title } = props;
  return (
    <div
      className={`px-6 py-3 rounded-md ${
        isActive && "bg-primaryAccent"
      } flex gap-3`}
      onClick={onClick}
    >
      <div className=" h-2 w-2 rounded-full shadow-md bg-white">{icon}</div>
      <div className="text-left">
        <h4>{title}</h4>
        {isActive && <p className="mb-3">{text}</p>}
      </div>
    </div>
  );
};
