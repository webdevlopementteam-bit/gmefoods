import Image from "next/image";
import { favourites } from "@/lib/productsData";

export default function All_Time_Favourites() {
  return (
    <section className="relative overflow-hidden bg-[#1B456D] px-5 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-20 ">
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="font-playfair text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            All Time Favourites
          </h2>
        </div>

        {/* Products Grid */}
        <div className="mx-0 grid grid-cols-2 gap-3 sm:mx-10 sm:grid-cols-2 sm:gap-6 md:mx-12 md:grid-cols-3 md:gap-7 lg:mx-16 lg:grid-cols-4 lg:gap-8 xl:mx-20 xl:gap-9">
          {favourites.map((product, index) => (
            <div
              key={index}
              className="group mx-auto flex w-full max-w-[280px] flex-col items-center overflow-hidden rounded-xl bg-white p-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-3"
            >
              {/* Product Image */}
              <div className="relative h-[140px] w-full sm:h-[180px] md:h-[200px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                  className="object-contain p-1 transition-transform duration-500 ease-in-out group-hover:scale-[0.85]"
                />
              </div>

              {/* Stars */}
              <div
                className="mt-2 flex items-center justify-center gap-0.5"
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="text-sm leading-none text-[#FFD700] sm:text-xl"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Product Name Box */}
              <div className="mt-2 flex min-h-[42px] w-full items-center justify-center rounded-md bg-[#00509D] px-1 py-1.5 sm:mt-3 sm:min-h-[46px] sm:px-2">
                <p className="text-center font-playfair text-xs font-bold tracking-wide text-white sm:text-base md:text-xl lg:text-1xl">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
