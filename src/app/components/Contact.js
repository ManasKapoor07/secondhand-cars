"use client";

import { FaPhoneAlt, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="min-h-screen w-full bg-white text-gray-800 px-6 py-12 md:px-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
        Get in Touch
      </h1>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-500 mt-1" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm text-gray-600">
                Near Shankar Hospital, Rampur Road, Haldwani – 263139
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-blue-500 mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm text-gray-600">
                <a href="tel:9837027172" className="text-blue-600 hover:underline">
                  9837027172
                </a>
                <br />
                <a href="tel:9897424583" className="text-blue-600 hover:underline">
                  9897424583
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaUserTie className="text-blue-500 mt-1" />
            <div>
              <p className="font-semibold">Contact Person</p>
              <p className="text-sm text-gray-600">Mayank Kapoor</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-72 overflow-hidden rounded-lg border border-gray-200">
          <iframe
            title="Maa Bhawani Car Bazar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.496972968453!2d79.52053257481226!3d29.208933175354915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09bbc35a27175%3A0x7dcaf46d2bfd1f08!2sMaa%20Bhawani%20Car%20Bazar!5e0!3m2!1sen!2sin!4v1753020675196!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-black">
        © {new Date().getFullYear()} Maa Bhawani Car Bazar. All rights reserved.
      </footer>
    </section>
  );
}
