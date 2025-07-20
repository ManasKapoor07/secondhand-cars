"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import BrandTabs from "./components/BrandTabs";
import CarCarousel from "./components/CarCarousel";
import HelpSection from "./components/HelpSection";
import HeroSection from "./components/Hero";
import ContactUs from "./components/Contact";

const menuItems = [
  { name: "Home", to: "hero" },
  { name: "Help", to: "help" },
  { name: "Cars", to: "cars" },
  { name: "Contact", to: "contact" },
];

export default function HomeMain() {
  const [selectedBrand, setSelectedBrand] = useState("Mercedes");

  return (
    <div className="font-sans bg-gradient-to-r from-blue-50 to-blue-100">
      {/* 🧭 Animated Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="sticky top-0 z-50 bg-white shadow-md px-6 mx-2 rounded-md py-4 flex gap-8 text-sm md:text-base font-medium justify-center"
      >
        {menuItems.map((item, idx) => (
          <ScrollLink
            key={idx}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="text-blue-700 font-semibold border-b-2 border-blue-700"
            className="cursor-pointer hover:text-blue-600 transition-all duration-200"
          >
            {item.name}
          </ScrollLink>
        ))}
      </motion.nav>

      {/* 🏠 Hero Section */}
      <Element name="hero" className="scroll-mt-16">
        <HeroSection />
      </Element>

      {/* ❓ Help Section */}
      <Element name="help" className="scroll-mt-16">
        <HelpSection />
      </Element>

      {/* 🚘 Car Carousel */}
      <Element name="cars" className="scroll-mt-16">
        <CarCarousel />
      </Element>

      {/* 📞 Contact Us */}
      <Element name="contact" className="scroll-mt-16">
        <ContactUs />
      </Element>
    </div>
  );
}
