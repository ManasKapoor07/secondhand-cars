"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import car1 from "../../car1.jpg";
import { SendIcon, ShellIcon } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const consultantNumber = "9837027172";
  const prefilledText = encodeURIComponent(
    "Greetings! I’m interested in exploring your car listings at Maa Bhawani Car Bazar. Please share more details or available options. Thank you!"
  );

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${consultantNumber}?text=${prefilledText}`,
      "_blank"
    );
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={car1}
            alt="Car Background"
            fill
            className="object-cover object-center"
            placeholder="blur"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-black/60 to-black/80 backdrop-brightness-75" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center max-w-screen-md mx-auto px-4 py-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium text-amber-400 uppercase tracking-widest mb-2"
        >
          100+ Happy Customers · PAN India Delivery
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight"
        >
          <span>Maa Bhawani </span>
          <span className="text-amber-400">Car Bazar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto"
        >
          We specialize in reliable, quality-checked second-hand cars at the
          best prices. Explore our wide range and drive away with confidence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-amber-500 text-black px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-amber-400 hover:scale-105 transition-all duration-200">
            Explore Cars
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 border border-amber-500 text-amber-400 bg-transparent px-6 py-3 rounded-full text-sm font-semibold hover:bg-amber-500 hover:text-black hover:scale-105 transition-all duration-200 shadow-md"
          >
            <motion.span
              initial={{ rotate: 0 }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.6 }}
            >
              <FaWhatsapp className="text-green-400 text-lg" />
            </motion.span>
            Talk to Consultant
          </button>
          <Link href="/sell-your-car">
            <button className="flex items-center gap-3 border border-amber-500 text-amber-400 bg-transparent px-6 py-3 rounded-full text-sm font-semibold hover:bg-amber-500 hover:text-black hover:scale-105 transition-all duration-200 shadow-md">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <SendIcon className="text-green-400 text-lg" />
              </motion.span>
              Sell your car
            </button>
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto px-4"
        >
          {[
            {
              title: "Easy Finance",
              desc: "Get low EMI options with minimal paperwork.",
            },
            {
              title: "Lowest Prices Guaranteed",
              desc: "Value-for-money deals you won’t find elsewhere.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-start gap-3">
                <CheckCircledIcon className="text-green-400 h-10 w-10" />
                <div>
                  <h4 className="text-md font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
