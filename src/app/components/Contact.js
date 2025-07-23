"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";

export default function ContactUs() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-12 md:px-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl text-teal-400 mt-1" />
            <div>
              <p className="font-semibold text-lg">Address:</p>
              <p className="text-gray-300">
                Near Shankar Hospital, Rampur Road, Haldwani – 263139
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-xl text-teal-400 mt-1" />
            <div>
              <p className="font-semibold text-lg">Phone:</p>
              <p>
                <a href="tel:9837027172" className="text-teal-400 hover:underline">
                  9837027172
                </a>
                <br />
                <a href="tel:9897424583" className="text-teal-400 hover:underline">
                  9897424583
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaUserTie className="text-xl text-teal-400 mt-1" />
            <div>
              <p className="font-semibold text-lg">Contact Person:</p>
              <p className="text-gray-300">Mayank Kapoor</p>
            </div>
          </div>
        </div>

        {/* Map with Animated Pin */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg"
        >
          <iframe
            title="Maa Bhawani Car Bazar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.496972968453!2d79.52053257481226!3d29.208933175354915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09bbc35a27175%3A0x7dcaf46d2bfd1f08!2sMaa%20Bhawani%20Car%20Bazar!5e0!3m2!1sen!2sin!4v1753020675196!5m2!1sen!2sin"
            width="100%"
            height="300"
            loading="lazy"
            className="w-full h-full border-none"
          ></iframe>

          {/* Animated Pin */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute top-4 right-4 bg-teal-500 p-2 rounded-full shadow-xl"
          >
            <PiMapPinFill className="text-white text-xl" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12 text-center text-sm text-gray-400"
      >
        © {new Date().getFullYear()} Maa Bhawani Car Bazar. All rights reserved.
      </motion.footer>
    </section>
  );
}
