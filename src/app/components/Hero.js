"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import car1 from '../../car1.jpg';

export default function HeroSection() {
  const consultantNumber = '9837077026';
  const prefilledText = encodeURIComponent('Hello, I would like to know more about your car listings.');

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${consultantNumber}?text=${prefilledText}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-10 px-6 md:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow-sm">
          Maa Bhawani Car Bazzar
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-medium mt-1">
          Trusted Marketplace for Second-Hand Cars
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2 max-w-xl"
        >
          <h1 className="text-4xl md:text-4xl font-bold text-blue-950 leading-tight">
            Find your dream car<br />at great prices, from home.
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Discover top-quality cars with virtual tours and expert guidance — all online.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-blue-800 transition">
              Explore Cars
            </button>
            <button
              className="bg-white border border-blue-900 text-blue-900 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-50 transition"
              onClick={handleWhatsAppClick}
            >
              Talk to Consultant
            </button>
          </div>
        </motion.div>

        {/* Car Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src={car1}
            alt="Car"
            width={500}
            height={300}
            className="rounded-3xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
