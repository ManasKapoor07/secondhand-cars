"use client";

import { useSendWhatsappMutation } from "@/redux/api/all-api";
import { motion } from "framer-motion";
import { ArrowBigLeft, ArrowBigRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  city: "",
  registrationNumber: "",
  rcAvailable: "No",
  insuranceAvailable: "No",
  carModel: "",
  variant: "",
  fuelType: "",
  ownership: "",
  kilometersDriven: "",
  expectedPrice: "",
  conditionScale: "5",
  damageRemarks: "",
  files: [],
};

export default function SellYourCar() {
  const [form, setForm] = useState(initialForm);
  const [negotiable, setNegotiable] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [logBody, setLogBody] = useState(null);
  const router = useRouter();

  const [sendDetails, { isLoading }] = useSendWhatsappMutation();

  function handleInput(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleFiles(e) {
    const files = Array.from(e.target.files);
    setForm((prev) => ({
      ...prev,
      files: files,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      city: form.city,
      registrationNumber: form.registrationNumber,
      rcAvailable: form.rcAvailable,
      insuranceAvailable: form.insuranceAvailable,
      carModel: form.carModel,
      variant: form.variant,
      fuelType: form.fuelType,
      ownership: form.ownership,
      kilometersDriven: form.kilometersDriven,
      expectedPrice: form.expectedPrice,
      conditionScale: form.conditionScale,
      damageRemarks: form.damageRemarks,
      files: [],
    };

    setLogBody(body);

    const formData = new FormData();
    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value);
    });

    form.files.forEach((file) => {
      formData.append("files", file);
    });

    await sendDetails(formData);

    setSubmitted(true);
    setTimeout(() => router.push("/"), 2000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-6 py-5 md:px-16 text-white">
      <Link
        href="/"
        className="font-extrabold text-yellow-400 hover:underline"
      >
        <ArrowBigLeft />
      </Link>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
          Sell Your Car with Confidence — Fast, Easy & Hassle-Free!
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Get the best price for your used car without stepping out of your
          home. Upload photos, share your details, and we&apos;ll handle the
          rest — from valuation to pickup, all at your convenience.
        </p>
      </motion.div>

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
            {/* Personal Details */}
            <h2 className="text-xl font-semibold">Personal Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleInput}
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleInput}
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                  placeholder="98xxxxxx72"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                  placeholder="youremail@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={form.city}
                  onChange={handleInput}
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                  placeholder="Haldwani"
                />
              </div>
            </div>

            <hr className="my-6 border-gray-600" />

            {/* Car Details */}
            <h2 className="text-xl font-semibold">Car Details</h2>
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
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
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
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Kilometers Driven
                </label>
                <input
                  type="number"
                  required
                  name="kilometersDriven"
                  value={form.kilometersDriven}
                  onChange={handleInput}
                  placeholder="30000"
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                />
              </div>
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
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                />
              </div>

              {/* RC Checkbox */}
              <div className="flex items-center space-x-3 mt-4">
                <input
                  id="rcAvailable"
                  type="checkbox"
                  checked={form.rcAvailable === "Yes"}
                  onChange={() =>
                    setForm((prev) => ({
                      ...prev,
                      rcAvailable: prev.rcAvailable === "Yes" ? "No" : "Yes",
                    }))
                  }
                  className="w-5 h-5 text-yellow-400 bg-gray-700 border-gray-500 rounded"
                />
                <label htmlFor="rcAvailable" className="text-sm font-medium">
                  RC Available
                </label>
              </div>

              {/* Insurance Checkbox */}
              <div className="flex items-center space-x-3 mt-4">
                <input
                  id="insuranceAvailable"
                  type="checkbox"
                  checked={form.insuranceAvailable === "Yes"}
                  onChange={() =>
                    setForm((prev) => ({
                      ...prev,
                      insuranceAvailable:
                        prev.insuranceAvailable === "Yes" ? "No" : "Yes",
                    }))
                  }
                  className="w-5 h-5 text-yellow-400 bg-gray-700 border-gray-500 rounded"
                />
                <label
                  htmlFor="insuranceAvailable"
                  className="text-sm font-medium"
                >
                  Insurance Available
                </label>
              </div>

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
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                />
              </div>
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
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                />
              </div>

              {/* Condition Scale Slider */}
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium">
                  Condition Scale
                </label>
                <input
                  type="range"
                  name="conditionScale"
                  min="1"
                  max="10"
                  value={form.conditionScale}
                  onChange={handleInput}
                  className="w-full"
                />
                <p className="text-sm text-gray-300 mt-1">
                  Condition: {form.conditionScale}/10
                </p>
              </div>

              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium">
                  Damage Remarks
                </label>
                <input
                  type="text"
                  name="damageRemarks"
                  value={form.damageRemarks}
                  onChange={handleInput}
                  placeholder="No Major Damage"
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                />
              </div>
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

            {/* Expected Price */}
            <div className="grid md:grid-cols-2 gap-6 items-center ">
              <div className="mb-5">
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
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-500 placeholder-gray-300"
                />
              </div>
              <div className="flex items-center space-x-3 mt-6 md:mt-0">
                <input
                  id="negotiable"
                  type="checkbox"
                  checked={negotiable}
                  onChange={() => setNegotiable(!negotiable)}
                  className="w-5 h-5 text-yellow-400 bg-gray-700 border-gray-500 rounded"
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
