import React, { ReactNode } from "react";
import { FaAddressCard, FaDollarSign } from "react-icons/fa";

export default function Provide() {
  const services = [
    {
      icon: <FaAddressCard size={50} color="$1446A0" />,
      title: "Elevate Your Brand Presence: Our Social Media Magic",
      body: ` 
    We specialize in crafting tailored social media strategies that captivate audiences and amplify brand visibility. With our creative flair and data-driven approach, we transform your online presence into a dynamic hub of engagement. .
    `,
    },
    {
      icon: <FaDollarSign size={50} color="$1446A0" />,
      title: "Your Digital Growth Partners: Unleashing Social Potential",
      body: `At our agency, we don't just manage social media; we unleash its full potential for your brand. Our team of experts dives deep into understanding your business goals, audience demographics,`,
    },
  ];

  return (
    <div className="w-full flex justify-center  gap-8 mt-[100px] ">
      <div
        className="rounded-3xl w-[40%]  overflow-hidden "
        data-aos="fade-right"
      >
        <img src="hero-img.jpg" alt="" />
      </div>
      <div className="flex-col justify-center ">
        <h2 className="text-left mb-20">
          {" "}
          We provide unique customized Value{" "}
        </h2>
        <div className="flex gap-5">
          {services.map(({ icon, body, title }, idx) => (
            <ProvideCard
              key={idx}
              data-aos="fade-up"
              data-aos-delay={100 * idx}
              icon={icon}
              body={body}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ItemProps {
  title: string;
  icon: ReactNode | any;
  body: string;
}

const ProvideCard = ({ icon, body, title }: ItemProps) => {
  return (
    <div className="  max-w-[400px] border-2 border-r-4 border-b-4 border-black  rounded-lg p-8 ">
      {icon}

      <h3 className="my-4">{title}</h3>

      <p className="text-lg">{body}</p>
    </div>
  );
};
