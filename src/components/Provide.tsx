import React, { ReactNode } from "react";
import { FaAddressCard } from "react-icons/fa";

export default function Provide() {
  const services = [
    {
      icon: <FaAddressCard />,
      title: "One Time Support",
      body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              aliquid explicabo cum debitis sint dolore quo quam sit amet
              inventore ea deleniti quasi, accusamus maxime provident eveniet
              voluptatem possimus tempore. Expedita soluta quam saepe explicabo
              voluptate optio odio et! Eligendi ut officiis commodi,
              reprehenderit nobis nesciunt eos laudantium sint? Quod accusamus
              eveniet enim perspiciatis, illo ipsum error adipisci debitis in
              dolores labore recusandae unde? Asperiores odit aut dolorem
              possimus labore, eveniet tenetur cum est rem expedita similique
              atque non optio nulla sapiente autem esse nesciunt. Repellendus
              sint esse, nobis sequi et incidunt exercitationem at veritatis
              numquam animi, culpa sed fuga!`,
    },
    {
      icon: <FaAddressCard />,
      title: "One Time Support",
      body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              aliquid explicabo cum debitis sint dolore quo quam sit amet
              inventore ea deleniti quasi, accusamus maxime provident eveniet
              voluptatem possimus tempore. Expedita soluta quam saepe explicabo
              voluptate optio odio et! Eligendi ut officiis commodi,
              reprehenderit nobis nesciunt eos laudantium sint? Quod accusamus
              eveniet enim perspiciatis, illo ipsum error adipisci debitis in
              dolores labore recusandae unde? Asperiores odit aut dolorem
              possimus labore, eveniet tenetur cum est rem expedita similique
              atque non optio nulla sapiente autem esse nesciunt. Repellendus
              sint esse, nobis sequi et incidunt exercitationem at veritatis
              numquam animi, culpa sed fuga!`,
    },
  ];

  return (
    <div className="flex justify-center gap-8">
      <div className="rounded-md max-w-3 ">
        <img src="/hero-img.png" alt="" />
      </div>
      <div className="flex-col justify-center ">
        <h2 className="text-center"> We provide unique customized Services </h2>
        <div className="flex gap-5">
          {services.map(({ icon, body, title }) => (
            <ProvideCard icon={icon} body={body} title={title} />
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
    <div className="border-[1px solid black] border-l-2 border-b-2  p-5 ">
      {icon}

      <h3>{title}</h3>

      <p>{body}</p>
    </div>
  );
};
