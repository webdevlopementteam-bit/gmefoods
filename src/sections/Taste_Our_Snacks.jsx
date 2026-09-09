import Image from "next/image";

export default function Taste_Our_Snacks() {
  const snacks = [
    { name: "Diet Chiwda", img: "/Taste Our Snacks/Diet Chiwda.png" },
    { name: "Paneer Bhujia", img: "/Taste Our Snacks/Paneer Bhujia.png" },
    {
      name: "Kasturi Masala Mix",
      img: "/Taste Our Snacks/Kasturi.png",
    },
    { name: "Jhal Mix", img: "/Taste Our Snacks/Jhal Mix.png" },
    
  ];

  return (
    <section className="bg-[#F9F8F1] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 xl:px-16">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="font-playfair text-3xl font-bold text-[#00509D] sm:text-4xl md:text-5xl">
          Taste Our Snacks
        </h2>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-8 xl:gap-10">
        {snacks.map((snack, index) => (
          <div
            key={index}
            className="group mx-auto flex min-h-[380px] w-full max-w-[320px] flex-col items-center justify-between overflow-hidden bg-[linear-gradient(120deg,#07469F,#57366B,#CF1D1D)] p-3 transition-all duration-300 ease-in-out sm:min-h-[400px] md:min-h-[420px]"
          >
            <div className="relative h-[290px] w-full sm:h-[310px] md:h-[340px]">
              <Image
                src={snack.img}
                alt={snack.name}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                className="object-contain p-3 transition-transform duration-500 ease-in-out group-hover:scale-[0.82]"
              />
            </div>

            <p className="px-2 pb-4 text-center font-playfair text-lg font-bold text-white sm:text-xl">
              {snack.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
