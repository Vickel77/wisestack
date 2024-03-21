import React, { ReactNode } from "react";
import { FaCalculator } from "react-icons/fa";

export default function Team() {
  const team: TeamData[] = [
    {
      image: "testimony1.png",
      title: "CJohn Doe",
      text: "Designer",
    },
    {
      image: "testimony2.png",
      title: "Vin Mokay ",
      text: "CEO",
    },
    {
      image: "testimony3.png",
      title: "Bee Kay",
      text: "Producer",
    },
  ];

  return (
    <div className="mt-[100px] max-w-[90%] text-center ">
      <h2 className="mb-[120px]">Meet the super Team</h2>
      <div className="flex flex-wrap gap-7">
        {team.map((service, idx) => (
          <ServiceCard
            service={service}
            data-aos="fade-up"
            data-aos-delay={100 * idx}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

interface TeamData {
  image: string;
  title: string;
  text?: string;
}
const ServiceCard = ({ service }: { service: TeamData }) => {
  const { image, text, title } = service;

  return (
    <div className="relative min-w-[300px]  rounded-xl border-2 border-gray-400  p-6 text-center max-w-[200px] flex-col justify-center items-center gap-5 ">
      <div className="mb-5 flex justify-center">
        <div className=" absolute -top-[50%] rounded-full flex shadow-2xl justify-center items-center">
          <img src={image} alt="" width={100} />
        </div>
      </div>
      <div className="mt-10">
        <b className="text-[25px]">{title}</b>
        <p>{text}</p>
      </div>
    </div>
  );
};
