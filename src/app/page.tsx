"use client";

import BannerCTA from "@/components/BannerCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Provide from "@/components/Provide";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <main className=" text-lg flex w-[100vw]  min-h-screen flex-col items-center justify-between md:px-20 px-10  overflow-hidden">
      <Header />
      <Provide />
      <Services />
      <Stats />
      <BannerCTA />
      <Testimonial />
      {/* <Team /> */}
      <Footer />
    </main>
  );
}
