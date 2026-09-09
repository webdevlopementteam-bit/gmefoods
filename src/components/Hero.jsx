"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
    {
      image: "/banner/b1.png",
      alt: "Banner 1",
    },
    {
      image: "/banner/b2.png",
      alt: "Banner 2",
    },
    {
      image: "/banner/b3.png",
      alt: "Banner 3",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        loop={true}
        navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[120px] w-full sm:h-[450px] md:h-[500px] lg:h-[560px]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="h-full w-full object-cover"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Previous Arrow */}
        <button
          type="button"
          className="hero-prev absolute left-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center text-5xl font-light text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] sm:left-6 sm:text-6xl md:left-8 lg:left-10"
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* Next Arrow */}
        <button
          type="button"
          className="hero-next absolute right-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center text-5xl font-light text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] sm:right-6 sm:text-6xl md:right-8 lg:right-10"
          aria-label="Next slide"
        >
          ›
        </button>
      </Swiper>
    </section>
  );
}
