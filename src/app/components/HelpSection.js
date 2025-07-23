"use client";

import { motion } from "framer-motion";

export default function HelpSection() {
  const financeCompanies = [
    {
      name: "Mahindra Finance",
      logo: "https://www.chittorgarh.net/images/ipo/mahindra_finance_logo.jpg",
    },
    {
      name: "Bajaj Finance",
      logo: "https://www.eqimg.com/images/2024/1280x720/09022024-image7-equitymaster.jpg",
    },
    {
      name: "Cholamandalam",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wucde8S6RZikxiYe9K3hF1O9aVGfxMZE3w&s",
    },
    {
      name: "SK Finance",
      logo: "https://play-lh.googleusercontent.com/Ku5KK3j_QTnR8Qnt3_3BuENKYahbSl3w9uZ78QFUIepWMMIGT44RisqX9KJRqBT4ITk=w600-h300-pc0xffffff-pd",
    },
    {
      name: "SBI Finance",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw28mI7O1uCteo2R8rntjsdPgBCGqjupq0PQ&s",
    },
  ];

  const duplicatedList = [...financeCompanies, ...financeCompanies];

  return (
    <section className="bg-white py-10 md:px-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-blue-900 mb-10"
      >
        Trusted Finance Partners
      </motion.h2>

      {/* Full-width logo slider */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 whitespace-nowrap w-max"
        >
          {duplicatedList.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-36 md:w-48"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 w-auto object-contain transition duration-300"
              />
              <p className="text-sm mt-2 text-center text-blue-800 font-medium">
                {company.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
