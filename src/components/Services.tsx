import React, { ReactNode } from "react";
import {
  FaBars,
  FaRuler,
  FaCalculator,
  FaHeart,
  FaPen,
  FaPenFancy,
  FaPersonBooth,
  FaChartArea,
  FaChartPie,
  FaCalendar,
} from "react-icons/fa";

export default function Services() {
  const services: ServiceData[] = [
    {
      icon: <FaPen color="#1446A0" size={30} />,
      title: "Content Creation and Curation",
    },
    {
      icon: <FaPenFancy color="#1446A0" size={30} />,
      title: "Social Media Advertising Management",
    },
    {
      icon: <FaPersonBooth color="#1446A0" size={30} />,
      title: "Social Media Strategy Development",
    },
    {
      icon: <FaHeart color="#1446A0" size={30} />,
      title: "Community Management and Engagement",
    },
    {
      icon: <FaChartArea color="#1446A0" size={30} />,
      title: "Analytics and Performance Tracking",
    },
    {
      icon: <FaChartPie color="#1446A0" size={30} />,
      title: "Influencer Marketing Campaigns",
    },
    {
      icon: <FaCalculator color="#1446A0" size={30} />,
      title: "Platform Optimization and Management",
    },
    {
      icon: <FaCalendar color="#1446A0" size={30} />,
      title: "Content Calendar Planning",
    },
    {
      icon: <FaRuler color="#1446A0" size={30} />,
      title: "Training and Consultation",
    },
    {
      icon: <FaBars color="#1446A0" size={30} />,
      title: "Customized Solutions and Support",
    },
  ];

  return (
    <div className="mt-[100px] max-w-[90%] text-center ">
      <h2 className="mb-20">Services</h2>
      <div className="flex flex-wrap gap-7">
        {services.map((service, idx) => (
          <ServiceCard
            data-aos={idx % 2 === 0 && "fade-up"}
            data-aos-delay={100 * idx}
            service={service}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

interface ServiceData {
  icon: ReactNode;
  title: string;
  text?: string;
}
const ServiceCard = ({ service }: { service: ServiceData }) => {
  const { icon, text, title } = service;

  return (
    <div className="relative  rounded-xl bg-white  p-6 text-center max-w-[200px] flex-col justify-center items-center gap-5 ">
      <div className="mb-5 flex justify-center">
        <div className="bg-primaryAccent absolute -top-[20px] rounded-full p-3 flex justify-center items-center">
          {icon}
        </div>
      </div>
      <div>
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
