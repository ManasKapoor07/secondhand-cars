"use client";

import { useSendWhatsappMutation } from "@/redux/api/all-api";
import { motion } from "framer-motion";
import { ArrowBigLeft } from "lucide-react";
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
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFiles(e) {
    const files = Array.from(e.target.files);
    setForm((prev) => ({ ...prev, files }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const body = { ...form, files: [] };
    setLogBody(body);

    const formData = new FormData();
    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value);
    });
    form.files.forEach((file) => {
      formData.append("files", file);
    });

    const res = await sendDetails(formData);
    if (res.data) {
      setSubmitted(true);
      setTimeout(() => router.push("/"), 2000);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-5 md:px-16 text-gray-800">
      <Link href="/" className="font-bold text-sky-600 hover:underline flex items-center gap-2 mb-4">
        <ArrowBigLeft size={20} /> Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Sell Your Car with Confidence
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Upload photos, share details, and get the best deal — right from your home in Uttarakhand.
        </p>
      </motion.div>

      <motion.div
        className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 max-w-4xl mx-auto shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {submitted ? (
          <motion.div
            className="text-green-600 text-center text-lg font-semibold"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            🎉 Your car details have been submitted!
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details */}
            <h2 className="text-xl font-semibold text-gray-800">Personal Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Full Name" name="name" value={form.name} onChange={handleInput} required />
              <Input label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleInput} required />
              <Input label="Email" name="email" type="email" value={form.email} onChange={handleInput} />
              <Input label="City" name="city" value={form.city} onChange={handleInput} required />
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Car Details */}
            <h2 className="text-xl font-semibold text-gray-800">Car Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Car Brand & Model" name="carModel" value={form.carModel} onChange={handleInput} required />
              <Input label="Year of Purchase" name="variant" value={form.variant} onChange={handleInput} />
              <Input label="Kilometers Driven" name="kilometersDriven" type="number" value={form.kilometersDriven} onChange={handleInput} required />
              <Input label="Registration Number" name="registrationNumber" value={form.registrationNumber} onChange={handleInput} />

              {/* Checkboxes */}
              <Checkbox label="RC Available" checked={form.rcAvailable === "Yes"} onChange={() => setForm((prev) => ({ ...prev, rcAvailable: prev.rcAvailable === "Yes" ? "No" : "Yes" }))} />
              <Checkbox label="Insurance Available" checked={form.insuranceAvailable === "Yes"} onChange={() => setForm((prev) => ({ ...prev, insuranceAvailable: prev.insuranceAvailable === "Yes" ? "No" : "Yes" }))} />

              <Input label="Fuel Type" name="fuelType" value={form.fuelType} onChange={handleInput} />
              <Input label="Ownership" name="ownership" value={form.ownership} onChange={handleInput} />

              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">Condition Scale</label>
                <input type="range" min="1" max="10" name="conditionScale" value={form.conditionScale} onChange={handleInput} className="w-full" />
                <p className="text-sm text-gray-500 mt-1">Condition: {form.conditionScale}/10</p>
              </div>

              <Input label="Damage Remarks" name="damageRemarks" value={form.damageRemarks} onChange={handleInput} className="col-span-2" />
            </div>

            {/* Upload */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload Car Photos/Videos
              </label>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleFiles}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-sky-600 file:text-white hover:file:bg-sky-500"
              />
            </div>

            {/* Price */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <Input label="Expected Price (₹)" name="expectedPrice" type="number" value={form.expectedPrice} onChange={handleInput} required />
              <Checkbox label="Price Negotiable" checked={negotiable} onChange={() => setNegotiable(!negotiable)} />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-md transition"
            >
              {isLoading ? "Submitting..." : "Submit Details"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

// Reusable Input Component
const Input = ({ label, type = "text", name, value, onChange, required }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
    />
  </div>
);

// Reusable Checkbox
const Checkbox = ({ label, checked, onChange }) => (
  <div className="flex items-center space-x-3 mt-2">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
    />
    <label className="text-sm font-medium text-gray-700">{label}</label>
  </div>
);
