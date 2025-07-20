"use client";

const brands = ["Mercedes", "BMW", "Audi", "Tesla", "Honda", "+12 Other"];

export default function BrandTabs({ selected, onSelect }) {
  return (
    <div className="flex gap-3 flex-wrap justify-center mt-6 bg-[#f7f9fc] py-4 px-2 rounded-xl">
      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => onSelect(brand)}
          className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-300
            ${
              selected === brand
                ? "bg-blue-900 text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}
