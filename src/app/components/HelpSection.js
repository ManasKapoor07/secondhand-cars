"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Mahindra Finance",
    image:
      "https://www.chittorgarh.net/images/ipo/mahindra_finance_logo.jpg",
  },
  {
    name: "Bajaj Finserv",
    image:
      "https://www.eqimg.com/images/2024/1280x720/09022024-image7-equitymaster.jpg",
  },
  {
    name: "Cholamandalam",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wucde8S6RZikxiYe9K3hF1O9aVGfxMZE3w&s",
  },
  {
    name: "SBI Bank",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw28mI7O1uCteo2R8rntjsdPgBCGqjupq0PQ&s",
  },
  {
    name: "SK Finance",
    image:
      "https://play-lh.googleusercontent.com/Ku5KK3j_QTnR8Qnt3_3BuENKYahbSl3w9uZ78QFUIepWMMIGT44RisqX9KJRqBT4ITk=w600-h300-pc0xffffff-pd",
  },
];

export default function HelpSection() {
  return (
    <section className="py-16 px-4 sm:px-10 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-sky-600">
          Trusted Finance Partners
        </h2>
        <div className="w-20 h-1 bg-sky-500 mt-3 mx-auto rounded-full" />
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Partnered with India&apos;s leading vehicle financing companies
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            <motion.img
              src={partner.image}
              alt={partner.name}
              width={80}
              height={80}
              className="object-contain h-16 w-auto transition-all duration-300"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <p className="text-sm text-gray-700 mt-3 text-center font-medium tracking-wide">
              {partner.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
