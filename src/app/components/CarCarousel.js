"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useLazyGetCarListQuery } from "@/redux/api/all-api";
import { Skeleton } from "./Skeleton";

export default function CarCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [getList, { isLoading, data }] = useLazyGetCarListQuery();

  useEffect(() => {
    getList();
  }, []);

  return (
    <section className="px-4 md:px-20 py-14 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight">
          🔥 Featured Cars for You
        </h2>
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            ref={nextRef}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>
      </div>

      {/* Loader Skeleton */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-xl w-full" />
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
        >
          {data?.slice(0, 12).map((car, i) => (
            <SwiperSlide key={car.id || i}>
              <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:shadow-lg transition-all overflow-hidden">
                {/* Image */}
                <div className="relative w-full h-48">
                  <img
                    src={car.image_url || "/placeholder.jpg"}
                    alt={car.title || "Used Car"}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Details */}
                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-semibold text-white truncate">
                    {car.title || "Untitled Car"}
                  </h3>
                  <div className="text-sm text-gray-300">
                    Year: {car.year || "N/A"}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2 text-sm">
                    <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs font-semibold">
                      ₹ {car.price?.toLocaleString() || "—"}
                    </span>
                    <span className="bg-emerald-600/20 text-emerald-400 px-2 py-1 rounded-full text-xs font-semibold">
                      {car.fuel_type || "Fuel N/A"}
                    </span>
                    <span className="bg-pink-600/20 text-pink-400 px-2 py-1 rounded-full text-xs font-semibold">
                      {car.transmission || "Transmission N/A"}
                    </span>
                    <span className="bg-yellow-600/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-semibold">
                      Model: {car.year || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
