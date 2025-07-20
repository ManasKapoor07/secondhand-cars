import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import xuvImage from "../../xuv.jpg";
import scorpioImage from "../../scorpio.jpg";
import tharImage from "../../car1.jpg";

import Image from "next/image";

const cars = [
  {
    title: "XUV",
    image: xuvImage,
  },
  {
    title: "Scorpio",
    image: scorpioImage,
  },
  {
    title: "Mahindra Thar",
    image: tharImage,
  },
];

export default function CarCarousel() {
  return (
    <section className="px-4 md:px-20 py-8 bg-[#f7f9fc]">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">Our Models</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.3}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {cars.map((car, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-xl shadow-md p-4 transition-transform duration-300 hover:scale-105">
              <div className="relative w-full h-44 rounded overflow-hidden mb-3">
                <Image
                  src={car.image}
                  alt={car.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-sm font-medium text-gray-800">{car.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
