"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import car1 from "../../car1.jpg";
import Image from "next/image";
import { CheckCircledIcon } from "@radix-ui/react-icons";

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
    <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Background Image */}
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
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/70 to-blue-200/90 backdrop-brightness-90" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center max-w-screen-md mx-auto px-4 py-12">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium text-blue-700 uppercase tracking-widest mb-2"
        >
          100+ Happy Customers | PAN India Delivery
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-extrabold text-blue-900 tracking-tight leading-tight"
        >
          <div className="flex gap-2 justify-center flex-wrap">
            <span className="block">Maa Bhawani</span>
            <span className="block text-blue-700">Car Bazzar</span>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-base sm:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          We specialize in reliable, quality-checked second-hand cars at the
          best prices. Explore our wide range and drive away with confidence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-200">
            Explore Cars
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 border border-blue-900 bg-white text-blue-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-md"
          >
            <motion.span
              initial={{ rotate: 0 }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.6 }}
            >
              <FaWhatsapp className="text-green-500 text-lg" />
            </motion.span>
            Talk to Consultant
          </button>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto px-4"
        >
          {/* Feature Card 1 */}
          <div className="bg-white backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02]">
            <div className="flex items-start gap-3">
              <CheckCircledIcon className="text-green-400 h-12 w-12" />

              <div>
                <h4 className="text-md font-semibold text-blue-900 mb-1">
                  Easy Finance
                </h4>
                <p className="text-sm text-gray-700">
                  Get low EMI options with minimal paperwork.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white backdrop-blur-md rounded-xl p-5 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02]">
            <div className="flex items-start gap-3">
              <CheckCircledIcon className="text-green-400 h-12 w-12" />
              <div>
                <h4 className="text-md font-semibold text-blue-900 mb-1">
                  Lowest Prices Guaranteed
                </h4>
                <p className="text-sm text-gray-700">
                  Value-for-money deals you won’t find elsewhere.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
