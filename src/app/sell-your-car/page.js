"use client";

import { useSendWhatsappMutation } from "@/redux/api/all-api";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  city: "",
  registrationNumber: "",
  rcAvailable: "",
  insuranceAvailable: "",
  carModel: "",
  variant: "",
  fuelType: "",
  ownership: "",
  kilometersDriven: "",
  expectedPrice: "",
  conditionScale: "",
  damageRemarks: "",
  files: [],
};

export default function SellYourCar() {
  const [form, setForm] = useState(initialForm);
  const [negotiable, setNegotiable] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [logBody, setLogBody] = useState(null);
  const router = useRouter();

  // RTK Query mutation
  const [sendDetails, { isLoading, data, error }] = useSendWhatsappMutation();

  function handleInput(e) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? value : value,
    }));
  }

  function handleFiles(e) {
    const files = Array.from(e.target.files);
    // For our log and backend: use file.name, real upload? Use file blobs.
    setForm((prev) => ({
      ...prev,
      files: files,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      name: form.name || "",
      phone: form.phone || "",
      email: form.email || "",
      city: form.city || "",
      registrationNumber: form.registrationNumber || "",
      rcAvailable: form.rcAvailable || "",
      insuranceAvailable: form.insuranceAvailable || "",
      carModel: form.carModel || "",
      variant: form.variant || "",
      fuelType: form.fuelType || "",
      ownership: form.ownership || "",
      kilometersDriven: form.kilometersDriven || "",
      expectedPrice: form.expectedPrice || "",
      conditionScale: form.conditionScale || "",
      damageRemarks: form.damageRemarks || "",
      files: [], // not needed here for sending
    };

    setLogBody(body);

    const formData = new FormData();

    // Append all text fields
    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append binary files
    form.files.forEach((file) => {
      formData.append("files", file);
    });

    await sendDetails(formData);

    setSubmitted(true);
    
    setTimeout(() => router.push('/'), 2000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-6 py-12 md:px-24 text-white">
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Sell Your Car with Confidence 🚗
      </motion.h1>

      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-10 max-w-4xl mx-auto shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {submitted ? (
          <motion.div
            className="text-green-400 text-center text-lg font-semibold"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            🎉 Your car details have been submitted!
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-white">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                required
                name="name"
                value={form.name}
                onChange={handleInput}
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="John Doe"
              />
            </div>
            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                required
                name="phone"
                value={form.phone}
                onChange={handleInput}
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="98xxxxxx72"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInput}
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="youremail@example.com"
              />
            </div>
            {/* Car Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Car Brand & Model
                </label>
                <input
                  type="text"
                  required
                  name="carModel"
                  value={form.carModel}
                  onChange={handleInput}
                  placeholder="Maruti Suzuki Swift"
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Year of Purchase
                </label>
                <input
                  type="text"
                  name="variant"
                  value={form.variant}
                  onChange={handleInput}
                  placeholder="2020"
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Kilometers Driven
                </label>
                <input
                  type="number"
                  name="kilometersDriven"
                  value={form.kilometersDriven}
                  onChange={handleInput}
                  required
                  placeholder="30000"
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleInput}
                  required
                  placeholder="Haldwani"
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            {/* Registration Number */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Registration Number
              </label>
              <input
                type="text"
                name="registrationNumber"
                value={form.registrationNumber}
                onChange={handleInput}
                placeholder="UK07AB1234"
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            {/* RC Available */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                RC Available?
              </label>
              <input
                type="text"
                name="rcAvailable"
                value={form.rcAvailable}
                onChange={handleInput}
                placeholder="Yes/No"
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            {/* Insurance Available */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Insurance Available?
              </label>
              <input
                type="text"
                name="insuranceAvailable"
                value={form.insuranceAvailable}
                onChange={handleInput}
                placeholder="Yes/No"
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            {/* Fuel Type */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Fuel Type
              </label>
              <input
                type="text"
                name="fuelType"
                value={form.fuelType}
                onChange={handleInput}
                placeholder="Petrol/Diesel/CNG..."
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            {/* Ownership */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Ownership
              </label>
              <input
                type="text"
                name="ownership"
                value={form.ownership}
                onChange={handleInput}
                placeholder="First/Second/Third..."
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            {/* Condition Scale */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Condition Scale (1-10)
              </label>
              <input
                type="text"
                name="conditionScale"
                value={form.conditionScale}
                onChange={handleInput}
                placeholder="8"
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            {/* Damage Remarks */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Damage Remarks
              </label>
              <input
                type="text"
                name="damageRemarks"
                value={form.damageRemarks}
                onChange={handleInput}
                placeholder="No Major Damage"
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Photos */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Upload Car Photos/Videos
              </label>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleFiles}
                className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-300"
              />
            </div>

            {/* Price + Negotiable */}
            <div className="grid md:grid-cols-2 gap-6 items-end">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Expected Price (in ₹)
                </label>
                <input
                  type="number"
                  required
                  name="expectedPrice"
                  value={form.expectedPrice}
                  onChange={handleInput}
                  placeholder="500000"
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="flex items-center space-x-3 mt-6 md:mt-0">
                <input
                  id="negotiable"
                  type="checkbox"
                  checked={negotiable}
                  onChange={() => setNegotiable(!negotiable)}
                  className="w-5 h-5 text-yellow-400 bg-gray-700 border-gray-500 rounded focus:ring-yellow-400"
                />
                <label htmlFor="negotiable" className="text-sm font-medium">
                  Price Negotiable
                </label>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md transition"
            >
              {isLoading ? "Submitting..." : "Submit Details"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
