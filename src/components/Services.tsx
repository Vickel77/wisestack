import React, { ReactNode, useState } from "react";
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
import ServiceModal from "./ServiceModal";

export default function Services() {
  const services: ServiceData[] = [
    {
      icon: <FaPen color="#00C465" size={30} />,
      title: "Content Creation and Curation",
      text: "We specialize in crafting captivating content tailored to your brand's voice and values. From engaging text posts to visually stunning images and videos, we'll ensure your content resonates with your target audience, driving meaningful engagement and loyalty.",
    },
    {
      icon: <FaPenFancy color="#00C465" size={30} />,
      title: "Social Media Advertising Management",
      text: "Let us supercharge your online presence with expertly crafted advertising campaigns on platforms like Facebook, Instagram, and LinkedIn. Our data-driven approach ensures your ads reach the right audience at the right time, driving traffic, leads, and conversions for your business.",
    },
    {
      icon: <FaPersonBooth color="#00C465" size={30} />,
      title: "Social Media Strategy Development",
      text: "Partner with us to develop a winning social media strategy customized to your unique goals and objectives. With a keen eye on industry trends and audience insights, we'll create a roadmap to elevate your brand's presence, engagement, and overall success on social media.",
    },
    {
      icon: <FaHeart color="#00C465" size={30} />,
      title: "Community Management and Engagement",
      text: "Building strong relationships with your audience is our forte. We'll actively manage your social media communities, engaging with followers, responding to comments, and fostering meaningful conversations that strengthen brand loyalty and drive positive sentiment.",
    },
    {
      icon: <FaChartArea color="#00C465" size={30} />,
      title: "Analytics and Performance Tracking",
      text: "Unlock the power of data with our comprehensive analytics and performance tracking services. From measuring campaign effectiveness to identifying growth opportunities, we'll provide actionable insights that fuel informed decision-making and drive continuous improvement.",
    },
    {
      icon: <FaChartPie color="#00C465" size={30} />,
      title: "Influencer Marketing Campaigns",
      text: "Harness the influence of industry leaders and social media personalities to amplify your brand's reach and credibility. Our tailored influencer marketing campaigns connect you with the right influencers, ensuring authentic endorsements that resonate with your target audience and drive results.",
    },
    {
      icon: <FaCalculator color="#00C465" size={30} />,
      title: "Platform Optimization and Management",
      text: "Maximize your social media presence with our expert platform optimization and management services. We'll fine-tune your profiles, optimize content for maximum visibility, and leverage advanced targeting strategies to reach and engage your ideal audience across all major platforms.",
    },
    {
      icon: <FaCalendar color="#00C465" size={30} />,
      title: "Content Calendar Planning",
      text: "Stay ahead of the curve with our strategic content calendar planning. We'll work closely with you to develop a cohesive content strategy, scheduling posts that align with your brand's messaging and goals, while maintaining consistency and relevance to keep your audience engaged.",
    },
    {
      icon: <FaRuler color="#00C465" size={30} />,
      title: "Training and Consultation",
      text: "Empower your team with the knowledge and skills needed to succeed on social media. Our personalized training sessions and strategic consultations provide invaluable insights, tools, and best practices to help you navigate the ever-changing landscape of digital marketing with confidence.",
    },
    {
      icon: <FaBars color="#00C465" size={30} />,
      title: "Customized Solutions and Support",
      text: "Your success is our priority. We'll tailor our services to meet your specific needs and goals, providing dedicated support and guidance every step of the way. Whether you're a startup looking to make waves or an established brand seeking to elevate your online presence, we're here to help you achieve your social media objectives.",
    },
  ];

  const [selectedService, setSelectedService] = useState<ServiceData>();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div
      id="services"
      className="mt-[100px] md:max-w-[90%] w-full  text-center "
    >
      <h2 className="mb-20">Services</h2>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {services.map((service, idx) => (
          <ServiceCard
            onClick={() => {
              setSelectedService(service);
              setShowModal(true);
            }}
            data-aos={idx % 2 === 0 && "fade-up"}
            data-aos-delay={100 * idx}
            service={service}
            key={idx}
          />
        ))}
      </div>
      <ServiceModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedService={selectedService!}
      />
    </div>
  );
}

export interface ServiceData {
  icon: ReactNode;
  title: string;
  text?: string;
}
const ServiceCard = ({
  service,
  onClick,
}: {
  service: ServiceData;
  onClick?: () => void;
}) => {
  const { icon, text, title } = service;

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer  hover:shadow-lg transition-all border-2 hover:border-primary border-transparent rounded-xl bg-white  p-6 text-center w-[45%] md:max-w-[200px] flex-col justify-center items-center gap-5 "
    >
      <div className="mb-5 flex justify-center">
        <div className="bg-primaryAccent absolute -top-[20px] rounded-full p-3 flex justify-center items-center">
          {icon}
        </div>
      </div>
      <div>
        <p>{title}</p>
        {/* <p>{text}</p> */}
      </div>
    </div>
  );
};
