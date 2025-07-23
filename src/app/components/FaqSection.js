"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to sell my car?",
    answer:
      "Most cars are sold within 4–5 business days. After inspection and offer acceptance, we pick up the car and pay instantly — all across Uttarakhand.",
  },
  {
    question: "Do I need to bring my car to you?",
    answer:
      "No need. We offer doorstep inspection and pickup across Dehradun, Rishikesh, Haldwani, and surrounding towns.",
  },
  {
    question: "How is my car’s price evaluated?",
    answer:
      "We assess condition, model, registration, and market demand — then offer a fair, competitive price instantly.",
  },
  {
    question: "Any charges or hidden costs?",
    answer:
      "None. Every step — from inspection to paperwork — is 100% free. You just receive payment, no fees involved.",
  },
  {
    question: "Which documents are needed?",
    answer:
      "RC, a valid photo ID (Aadhaar/PAN), and insurance. Don’t worry if something’s missing — we’ll help sort it.",
  },
  {
    question: "Will you handle RC transfer?",
    answer:
      "Yes. We take full responsibility for the ownership transfer post-sale, so you have zero future liability.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-14 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-blue-500 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-gray-50 hover:shadow-sm transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-800 font-medium hover:bg-white focus:outline-none"
              >
                <span className="text-base sm:text-lg">{faq.question}</span>
                <FaChevronDown
                  className={`ml-4 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-sky-600" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-600 text-[15px] leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
