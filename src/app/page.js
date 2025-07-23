"use client";

import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";

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
  const [open, setOpen] = useState(false);

  return (
    <div className="flex font-sans min-h-screen">

      {/* Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -260 }}
        animate={{ x: open ? 0 : -260 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="fixed top-0 left-0 h-full w-60 bg-white z-50 shadow-lg px-4 py-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-blue-700 font-bold text-lg">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X className="w-5 h-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        <NavigationMenu.Root orientation="vertical" className="flex flex-col gap-4">
          {menuItems.map((item, idx) => (
            <NavigationMenu.Item key={idx}>
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setOpen(false)}
                activeClass="text-blue-700 font-bold"
                className="cursor-pointer px-2 py-1 hover:text-blue-600 text-gray-500 transition-all duration-200"
              >
                {item.name}
              </ScrollLink>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.Root>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 w-full ml-0 md:ml-0  bg-gradient-to-br from-white/60 via-white/70 to-blue-200/90 backdrop-brightness-90">
        <Element name="hero" className="scroll-mt-16">
          <HeroSection />
        </Element>
        <Element name="help" className="scroll-mt-16">
          <HelpSection />
        </Element>
        <Element name="cars" className="scroll-mt-16">
          <CarCarousel />
        </Element>
        <Element name="contact" className="scroll-mt-16">
          <ContactUs />
        </Element>
      </div>
    </div>
  );
}
