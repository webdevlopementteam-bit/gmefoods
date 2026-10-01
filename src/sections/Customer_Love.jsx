import Image from "next/image";
import { customerLove } from "@/lib/productsData";
import Link from "next/link";

export default function Customer_Love() {
  return (
    <>
      {/* Customer Love Section */}
      <section className="w-full bg-[#F9F8F1]">
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Heading */}
          <div className="px-4 pb-8 pt-8 text-center sm:px-6 sm:pb-10 sm:pt-10 md:px-8 md:pb-12 md:pt-12">
            <p className="mb-2 font-playfair text-base font-semibold text-gray-700 sm:text-lg">
              What Our Customers Say
            </p>
            <h2 className="font-playfair text-3xl font-bold text-[#00509D] sm:text-4xl md:text-5xl">
              Customer Love
            </h2>
            <p className="mx-auto mt-4 max-w-[800px] text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
              Customers love GME&apos;s Mumbai Bhel, Aloo Bhujia, Paneer
              Bhujia and Badaam Pakoda for their freshness, crunch and taste.
              Parents say their kids enjoy Noodles and Tomato Katori too.
            </p>
          </div>

          {/* Customer Cards */}
          <div className="grid w-full grid-cols-1 gap-6 px-4 pb-10 sm:grid-cols-2 sm:gap-7 sm:px-6 sm:pb-12 md:px-8 lg:grid-cols-4 lg:gap-8 lg:px-10">
            {customerLove.map((customer, index) => (
              <div
                key={index}
                className="group mx-auto flex min-h-[530px] w-full max-w-[310px] flex-col overflow-hidden bg-[#E9E8E0] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[550px] sm:max-w-[300px] lg:max-w-none"
              >
                {/* Customer Image */}
                <div
                  className={`relative mx-auto overflow-hidden ${
                    index === 1 || index === 2
                      ? "mt-14 h-[300px] w-[70%] sm:h-[280px] sm:w-[70%] lg:mt-14 lg:h-[280px] lg:w-[70%]"
                      : index === 3
                        ? "mt-4 h-[320px] w-full sm:h-[320px]"
                        : "h-[320px] w-full sm:h-[340px]"
                  }`}
                >
                  <Image
                    src={customer.image}
                    alt={`Customer ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 40vw, (max-width: 1024px) 25vw, 20vw"
                    className={`transition-transform duration-500 ${
                      index === 1 || index === 2
                        ? "object-contain group-hover:scale-105"
                        : index === 3
                          ? "object-contain group-hover:scale-105"
                          : "object-cover group-hover:scale-105"
                    }`}
                  />
                </div>

                {/* Stars */}
                <div
                  className="mt-4 flex items-center justify-center gap-2"
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="text-2xl leading-none text-[#F0AD4E]"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="flex min-h-[190px] flex-1 items-center justify-center px-4 py-5 sm:min-h-[200px] sm:px-5">
                  <i className="text-center font-playfair text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                    "{customer.description}"
                  </i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Snacks of the Month Section */}
      <section className="w-full bg-[#F9F8F1]">
        <div className="grid w-full grid-cols-1 overflow-hidden md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center bg-[#004383] px-6 py-10 sm:px-10 sm:py-12 md:px-10 lg:px-14 lg:py-14">
            <p className="mb-3 font-playfair text-base font-semibold text-white sm:text-lg">
              Snacks of the month
            </p>

            <h2 className="mb-5 font-playfair text-3xl font-bold text-white sm:text-4xl md:text-4xl lg:text-5xl">
              Mumbai Bhel
            </h2>

            <p className="max-w-[600px] font-playfair text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              <strong>Mumbai Bhel</strong> is a tangy and crunchy snack
              specially crafted to suit Indian taste preferences. The packaging
              features an eye-catching design with a fun cartoon character and
              vibrant colors, making it instantly appealing.
            </p>

            <div className="mt-6">
              <Link
                href={"/about-us"}
                className="rounded-md bg-[#F0264C] px-6 py-2.5 font-playfair text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F0AD4E]"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex min-h-[300px] items-center justify-center bg-white p-5 sm:min-h-[360px] sm:p-8 md:min-h-[400px] md:p-10 lg:min-h-[440px] lg:p-12">
            <div className="relative h-[260px] w-full sm:h-[320px] md:h-[360px] lg:h-[400px]">
              <Image
                src="/Snacks of the month/p1.png"
                alt="Mumbai Bhel"
                fill
                sizes="(max-width: 768px) 90vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GME Snacks Factory Section */}
      <section className="w-full bg-[#F9F8F1]">
        <div className="mx-auto grid w-full grid-cols-1 items-center gap-6 py-8 sm:gap-8 sm:px-6 sm:py-10 md:grid-cols-2 md:gap-8 md:px-8 lg:gap-12 lg:px-0 lg:py-14">
          {/* Left Side - Image */}
          <div className="flex w-full justify-center">
            <div className="w-full max-w-[800px] overflow-hidden rounded-lg shadow-lg px-2 sm:px-3 md:px-0 lg:m-10 lg:p-5">
              <Image
                src="/Snacks of the month/p2.png"
                alt="GME Snacks Factory"
                width={800}
                height={700}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="w-full px-4 sm:px-0">
            <h2 className="mb-4 text-2xl font-medium leading-tight text-gray-800 sm:mb-5 sm:text-3xl md:text-3xl lg:mb-6 lg:text-4xl">
              GME Snacks Factory – Quality and Taste at Its Best
            </h2>

            <p className="mb-5 text-sm leading-7 text-gray-700 sm:mb-6 sm:text-base sm:leading-8">
              GME Snacks is a leading manufacturer of high-quality namkeen and
              snacks, bringing delicious and crunchy treats to people across
              India. Our factory is equipped with modern machinery and follows
              strict hygiene standards to ensure the best quality products.
            </p>

            <h3 className="mb-3 text-lg font-semibold text-gray-800 sm:mb-4 sm:text-xl">
              What We Produce:
            </h3>

            <ul className="space-y-2.5 text-sm leading-6 text-gray-700 sm:space-y-3 sm:text-base sm:leading-7">
              <li>
                <span className="mr-1">✅</span>
                <span className="font-medium">Mumbai Bhel</span> – Spicy and
                crunchy snack
              </li>

              <li>
                <span className="mr-1">✅</span>
                <span className="font-medium">Kurkure</span> – Crispy and
                flavorful corn-based sticks
              </li>

              <li>
                <span className="mr-1">✅</span>
                <span className="font-medium">Chips</span> – Perfectly fried and
                seasoned potato chips
              </li>

              <li>
                <span className="mr-1">✅</span>
                <span className="font-medium">Other Namkeen Varieties</span> – A
                wide range of traditional and modern Indian snacks
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
