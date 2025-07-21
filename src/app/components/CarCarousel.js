"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ⬅️ Import Autoplay
import "swiper/css";
import "swiper/css/navigation";

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
    <section className="px-4 md:px-20 py-8 bg-[#f7f9fc]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-black">
          Our Car Collection
        </h2>
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className=" px-3 py-1 rounded text-blue-700 font-semibold hover:bg-gray-300 transition"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className=" text-blue-700 font-semibold px-3 py-1 rounded hover:bg-gray-300 transition"
          >
            →
          </button>
        </div>
      </div>

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
            delay: 2000, // ⬅️ 3 seconds delay
            pauseOnMouseEnter : true,
            disableOnInteraction: true,
            
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
              <div className="bg-white rounded-xl shadow p-4 transition hover:scale-105">
                <div className="relative w-full h-44 rounded overflow-hidden mb-3">
                  <img
                    src={car.image_url || "/placeholder.jpg"}
                    alt={car.title || "Used Car"}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {car.title || "Untitled Car"}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Year: {car.year || "N/A"}
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-700 mt-2">
                  <span className="font-medium">
                    ₹ {car.price?.toLocaleString() || "—"}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                    {car.fuel_type || "Fuel N/A"}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                    {car.transmission || "N/A"}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                    Model: {car.year || "N/A"}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
