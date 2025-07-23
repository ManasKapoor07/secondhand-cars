"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Avatar from "boring-avatars";

const testimonials = [
  {
    name: "Rohit Bisht",
    title: "Engineer, Dehradun",
    rating: 5,
    quote:
      "Selling my car from Haldwani was incredibly smooth. The pickup was doorstep and the payment was instant. Highly recommended!",
  },
  {
    name: "Aarti Joshi",
    title: "Teacher, Haldwani",
    rating: 5,
    quote:
      "The team was super professional. They handled everything, including paperwork and RC transfer. Best car-selling experience I've had in Haldwani.",
  },
  {
    name: "Nikhil Rawat",
    title: "Hotel Manager, Rishikesh",
    rating: 4,
    quote:
      "The service is great for people in smaller towns. Even in Rishikesh, I had my car sold within 2 days. Hassle-free and safe.",
  },
  {
    name: "Neha Thakur",
    title: "Marketing Executive, Rudrapur",
    rating: 5,
    quote:
      "Super fast and trustworthy platform. Living in Rudrapur, I didn’t expect it to be this easy. No hidden fees or delays!",
  },
  {
    name: "Ankit Negi",
    title: "Banker, Haridwar",
    rating: 5,
    quote:
      "From car inspection to final sale, everything was managed professionally. It’s the go-to place for selling cars in Haldwani.",
  },
  {
    name: "Pooja Pant",
    title: "Bank PO, Nainital",
    rating: 4,
    quote:
      "Even from the hills of Nainital, they made selling my car seamless. Everything was arranged quickly and the payment came on time.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 md:px-20 py-16 bg-gray-50 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-sky-600">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Avatar
                size={40}
                name={t.name}
                variant="beam"
                colors={["#6EE7B7", "#3B82F6", "#9333EA", "#F59E0B", "#EF4444"]}
              />
              <div>
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.title}</div>
              </div>
            </div>

            <div className="flex items-center mb-2 gap-1 text-yellow-500 text-sm">
              {[...Array(t.rating)].map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
