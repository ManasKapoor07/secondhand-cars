"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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
    <section className="px-4 md:px-20 py-12 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          Explore Our Car Collection
        </h2>
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="px-3 py-1.5 rounded-full border border-blue-300 bg-white text-blue-700 hover:bg-blue-100 transition"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="px-3 py-1.5 rounded-full border border-blue-300 bg-white text-blue-700 hover:bg-blue-100 transition"
          >
            →
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
            delay: 3000,
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
              <div className=" rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mb-4">
                {/* Image */}
                <div className="relative w-full h-48">
                  <img
                    src={car.image_url || "/placeholder.jpg"}
                    alt={car.title || "Used Car"}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Details */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {car.title || "Untitled Car"}
                  </h3>

                  <div className="text-sm text-gray-600">
                    Year: {car.year || "N/A"}
                  </div>

                  <div className="flex flex-wrap gap-2 text-sm mt-2">
                    <span className="font-semibold text-blue-800">
                      ₹ {car.price?.toLocaleString() || "—"}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                      {car.fuel_type || "Fuel N/A"}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                      {car.transmission || "N/A"}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
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
