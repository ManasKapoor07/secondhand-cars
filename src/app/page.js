"use client";

import { useState } from "react";
import BrandTabs from "./components/BrandTabs";
import CarCarousel from "./components/CarCarousel";
import HelpSection from "./components/HelpSection";
import HeroSection from "./components/Hero";
import ContactUs from "./components/Contact";


export default function HomeMain() {
  const [selectedBrand, setSelectedBrand] = useState("Mercedes");

  return (
    <div className="font-sans">
      <HeroSection />
      <HelpSection />
      {/* <div className="px-4 md:px-20 pt-4 bg-[#f7f9fc] ">
        <BrandTabs selected={selectedBrand} onSelect={setSelectedBrand} />
      </div> */}
      <CarCarousel />
      <ContactUs />
    </div>
  );
}
