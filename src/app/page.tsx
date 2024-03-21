"use client";

import BAnner from "@/components/Banner";
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
      offset: 200,
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="text-lg flex w-full min-h-screen flex-col items-center justify-between p-24 pt-5 pb-0">
      <Header />
      <Provide />
      <Services />
      <Stats />
      <BAnner />
      <Testimonial />
      <Team />
      <Footer />
    </main>
  );
}
