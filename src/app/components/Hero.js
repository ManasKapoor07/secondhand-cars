"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import car1 from "../../car1.jpg";
import { SendIcon } from "lucide-react";
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
    <section className="relative w-full min-h-[100vh]  flex items-center justify-center px-4 sm:px-6 overflow-hidden font-sans bg-gradient-to-br from-sky-50 to-white">
      {/* Background Overlay */}
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
            className="object-cover object-center opacity-10"
            placeholder="blur"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-2 px-4">
        <div className="text-left">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-sky-600 uppercase tracking-widest mb-2"
          >
            100+ Happy Customers · PAN India Delivery
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            <span>Maa Bhawani </span>
            <span className="text-sky-600">Car Bazar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl"
          >
            We specialize in reliable, quality-checked second-hand cars at the
            best prices. Explore our wide range and drive away with confidence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-sky-600 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-sky-500 hover:scale-105 transition-all duration-200">
              Explore Cars
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-3 border border-sky-600 text-sky-700 bg-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-sky-100 hover:scale-105 transition-all duration-200 shadow-md"
            >
              <FaWhatsapp className="text-green-500 text-lg" />
              Talk to Consultant
            </button>
            <Link href="/sell-your-car">
              <button className="flex items-center gap-3 border border-sky-600 text-sky-700 bg-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-sky-100 hover:scale-105 transition-all duration-200 shadow-md">
                <SendIcon className="text-sky-500 text-lg" />
                Sell your car
              </button>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
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
                className="bg-white border border-sky-100 rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-start gap-3">
                  <CheckCircledIcon className="text-sky-500 h-6 w-6 mt-1" />
                  <div>
                    <h4 className="text-md font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Image (mock showroom) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block rounded-3xl overflow-hidden shadow-xl border border-white/20 bg-white"
        >
          <Image
            src={car1}
            alt="Showroom"
            width={600}
            height={400}
            className="object-cover rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}