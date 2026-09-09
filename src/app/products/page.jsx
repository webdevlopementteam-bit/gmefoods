// app/products/page.js

"use client";

import Image from "next/image";
import { Star, Sparkles } from "lucide-react";
import { products } from "@/lib/productsData";

const sectionTitles = {
  snacks: "Snacks ₹5",
  chips: "Chips ₹5",
  namkeen: "Namkeen ₹5",
  namkeen10: "Namkeen ₹10",
  namkeen200: "Namkeen 200gm",
  namkeen400: "Namkeen 400gm",
  rusk5: "Rusk ₹5",
  rusk10: "Rusk ₹10",
  snacksOfTheMonth: "Snacks of the Month",
  tasteOurSnacks: "Taste Our Snacks",
};

export default function ProductsPage() {
  return (
    <main className="w-full overflow-hidden bg-[#1B456D] scroll-mt-60">
      {Object.entries(products).map(([category, items]) => (
        <section
          key={category}
          className="relative w-full overflow-hidden bg-[#1B456D] py-8 sm:py-10 md:py-12"
        >
          {/* Background Decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
            {/* Section Heading */}
            <div className="mb-7 flex flex-col items-center sm:mb-9">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-px w-8 bg-[#F0AD4E] sm:w-12" />

                <Sparkles className="h-4 w-4 text-[#F0AD4E]" />

                <span className="h-px w-8 bg-[#F0AD4E] sm:w-12" />
              </div>

              <h2 className="text-center text-2xl font-bold tracking-wide text-white sm:text-3xl md:text-4xl">
                {sectionTitles[category] || category}
              </h2>

              <div className="mt-2 h-1 w-14 rounded-full bg-[#F0AD4E]" />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {items.map((product, index) => (
                <div
                  key={`${category}-${product.name}-${index}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Product Image */}
                  <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#4B6C8C] p-3 sm:p-5">
                    {/* Image Glow */}
                    <div className="pointer-events-none absolute inset-5 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:bg-white/20" />

                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 23vw"
                      className="relative z-10 h-full w-full object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="relative bg-white px-2.5 pb-4 pt-3 text-center sm:px-4 sm:pb-5 sm:pt-4">
                    <h3 className="line-clamp-2 min-h-[40px] text-sm font-bold leading-5 text-gray-800 sm:min-h-[44px] sm:text-base sm:leading-6">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="mt-2.5 flex items-center justify-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-[#F0AD4E] text-[#F0AD4E] drop-shadow-sm sm:h-[18px] sm:w-[18px]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hover Border */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#F0AD4E]/40" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
