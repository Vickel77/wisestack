"use client";
import React from "react";
import Carousel from "nuka-carousel";

export default function Testimonial() {
  const testimonies = [
    {
      name: "John Doe",
      title: "CEO Alumo Bitters",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit natus itaque doloribus temporibus labore beatae magni odio, eligendi, distinctio, aliquam voluptas aspernatur officiis.",
    },
    {
      name: "Paris Bowens",
      title: "Producer",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit natus itaque doloribus temporibus labore beatae magni odio, eligendi, distinctio, aliquam voluptas aspernatur officiis.",
    },
    {
      name: "Smith Jones",
      title: "CEO Chabod Minstresl",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit natus itaque doloribus temporibus labore beatae magni odio, eligendi, distinctio, aliquam voluptas aspernatur officiis.",
    },
  ];

  return (
    <div className="w-full text-center mt-[100px]">
      <div>
        <h2 className="mb-5">What people say about our services</h2>
        <div className=" text-lg flex justify-center ">
          <p className="w-[50%] mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            corporis illo earum doloribus voluptatibus obcaecati, repellat
          </p>
        </div>
      </div>
      <div>
        <div
          style={{ zIndex: 999 }}
          className="w-full h-20  relative overflow-visible "
        >
          <img
            src="testimony1.png"
            alt=""
            width={80}
            className="absolute shadow-xl top-0"
            data-aos="fade-left"
          />
          <img
            src="testimony2.png"
            alt=""
            width={40}
            className="absolute shadow-xl top-[200%]"
            data-aos="fade-left"
          />
          <img
            src="testimony3.png"
            alt=""
            width={60}
            className="absolute shadow-xl left-[25%] top-[80%]"
            data-aos="fade-left"
          />
          <img
            src="testimony4.png"
            alt=""
            width={50}
            className="absolute shadow-xl left-[50%] translate-x-[-50%] "
            data-aos="fade-in"
          />
          <img
            src="testimony5.png"
            alt=""
            width={60}
            className="absolute shadow-xl right-[25%] top-[80%]"
            data-aos="fade-right"
          />
          <img
            src="testimony1.png"
            alt=""
            width={40}
            className="absolute shadow-xl top-[200%] right-0"
            data-aos="fade-down-right"
          />
          <img
            src="testimony2.png"
            alt=""
            width={80}
            className="absolute shadow-xl right-3 "
            data-aos="fade-right"
          />
        </div>
        <div className="w-full flex justify-center">
          <div className="min-w-[40%] p-10 md:w-10  rounded-3xl shadow-xl bg-white relative">
            <p className="absolute top-5 left-5 text-[70px] opacity-25">
              &quot;
            </p>
            <Carousel autoplay withoutControls wrapAround>
              {testimonies.map((testimony, idx) => (
                <div key={idx} className=" w-full text-center">
                  <blockquote className="mb-5 ">{testimony.text}</blockquote>
                  <h5 className="pb-1 text-primary">{testimony.name}</h5>
                  <i className="opacity-50">{testimony.title}</i>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
