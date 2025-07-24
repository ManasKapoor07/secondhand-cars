"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";

import BrandTabs from "./components/BrandTabs";
import CarCarousel from "./components/CarCarousel";
import HelpSection from "./components/HelpSection";
import HeroSection from "./components/Hero";
import ContactUs from "./components/Contact";
import FaqSection from "./components/FaqSection";
import logo from "../logo.png";
import Image from "next/image";

const menuItems = [
  { name: "Home", to: "hero" },
  { name: "Partners", to: "partners" },
  { name: "Cars", to: "cars" },
  { name: "FAQ", to: "faq" },
  { name: "Contact", to: "contact" },
];

export default function HomeMain() {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen" >
      {/* Top Navigation Bar */}
      <header className="w-full shadow-sm fixed top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" className="w-16 h-16 object-contain" />
            <h1 className="hidden sm:block text-base font-semibold text-gray-600 tracking-wide capitalize">
              Maa Bhawani Car Bazar
            </h1>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-700">
            {menuItems.map((item, idx) => (
              <ScrollLink
                key={idx}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-sky-600 font-semibold"
                className="cursor-pointer hover:text-sky-500 transition-colors duration-200"
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Content Sections */}
      <main>
        <Element name="hero" className="scroll-mt-16">
          <HeroSection />
        </Element>
        <Element name="partners" className="scroll-mt-16">
          <HelpSection />
        </Element>
        <Element name="cars" className="scroll-mt-16">
          <CarCarousel />
        </Element>
        <Element name="faq" className="scroll-mt-16">
          <FaqSection />
        </Element>
        <Element name="contact" className="scroll-mt-16">
          <ContactUs />
        </Element>
      </main>
    </div>
  );
}
