"use client";

import { motion } from "framer-motion";

export default function HelpSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-50 py-16 px-6 md:px-20">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
      >
        How Can We Help You?
      </motion.h2>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Card 1 - Finance Check */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 w-full md:w-1/2 text-center hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Free Finance Check
          </h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Get pre-approved before you shop — fast and easy, no credit impact.
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg text-sm font-semibold transition">
            Check Now
          </button>
        </motion.div>

        {/* Card 2 - Sell Your Car */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white border rounded-2xl shadow-lg p-8 w-full md:w-1/2 text-center hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Sell Your Car at the Best Price!
          </h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Quick and easy — get top value for any car.
          </p>
          <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition">
            Sell Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
