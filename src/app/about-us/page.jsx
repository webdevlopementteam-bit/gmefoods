"use client";
import Image from "next/image";
import { MapPin, PackageCheck } from "lucide-react";
import { FaMedal, FaChartLine } from "react-icons/fa";
import { useState } from "react";
import {
  Lightbulb,
  Rocket,
  Smile,
  Medal,
  ChartNoAxesColumnIncreasing,
  DollarSign,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
  const [isVision, setIsVision] = useState(false);
  const missionContent = (
    <>
      <p className="mb-2">Our mission is simple yet profound:</p>
      <p className="font-semibold">
        “To provide high-quality, hygienic, and delicious ready-to-eat snacks
        that celebrate India’s rich culinary heritage while meeting the modern
        consumer’s demand for taste, convenience, and nutrition.”
      </p>
      <p className="mt-1">
        We believe food is more than sustenance—it’s a connection to culture,
        family, and community. Every product that carries the GME label reflects
        our passion for authentic taste, safety, and customer satisfaction.
      </p>
    </>
  );

  const visionContent = (
    <>
      <p className="mb-2">
        We envision a future where GME is not just a household name in Eastern
        India, but a <strong>national leader</strong> in the snack food
        industry. Our long-term vision is:
      </p>
      <p className="font-semibold">
        “To be a leading national snack brand recognized for its commitment to
        quality, innovation, and customer satisfaction—bringing joy to every
        household with every bite.”
      </p>
    </>
  );

  const reasons = [
    {
      icon: Smile,
      title: "Authentic Taste",
      text: "We stay true to traditional Indian flavors while constantly evolving to suit contemporary tastes.",
    },
    {
      icon: FaMedal,
      title: "Quality Assurance",
      text: "Every batch is subject to strict quality checks to ensure consistency, hygiene, and safety.",
    },
    {
      icon: FaChartLine,
      title: "Wide Range",
      text: "From spicy extruded snacks to classic namkeens, our portfolio caters to diverse consumer preferences.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      text: "We offer premium quality snacks at competitive prices, making indulgence accessible for all.",
    },
    {
      icon: Handshake,
      title: "Strong Distribution",
      text: "Our widespread presence ensures that GME products are always within your reach, whether in a local store or a large supermarket.",
    },
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* About GME */}
      <section className="w-full bg-[#FDFDFB]">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-12">
          {/* Left Side Image */}
          <div className="flex w-full justify-center">
            <div className="w-full overflow-hidden rounded-xl">
              <Image
                src="/About GME/p1.png"
                alt="About GME"
                width={900}
                height={700}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full">
            <h2 className="mb-3 text-3xl font-medium leading-tight text-[#00509D] sm:text-4xl">
              About GME
            </h2>

            <div className="space-y-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              <p>
                <strong className="font-semibold text-gray-900">GME</strong> is
                a brand of{" "}
                <strong className="font-semibold text-gray-900">
                  G.M Exim Private Limited
                </strong>
                , a company headquartered in{" "}
                <strong className="font-semibold text-gray-900">Patna</strong>,
                the capital city of{" "}
                <strong className="font-semibold text-gray-900">Bihar</strong>.
                Established with a vision to bring high-quality, hygienic, and
                delicious snacks to the Indian market, GME has rapidly emerged
                as a trusted name in the ready-to-eat food industry. With a
                deep-rooted commitment to quality and tradition, GME delivers a
                wide variety of snacks that resonate with Indian taste
                preferences while adhering to modern production standards.
              </p>

              <p>
                At the heart of GME&apos;s operations is the desire to blend{" "}
                <strong className="font-semibold text-gray-900">
                  traditional Indian flavors
                </strong>{" "}
                with contemporary food processing techniques. We cater to a
                diverse audience with our extensive product portfolio that
                includes both{" "}
                <strong className="font-semibold text-gray-900">
                  extruded snacks
                </strong>{" "}
                (popularly known as{" "}
                <strong className="font-semibold text-gray-900">
                  TUK TUK SNACKS, FINGERS, CURLY MASALA PUFF
                </strong>{" "}
                and More) and a variety of{" "}
                <strong className="font-semibold text-gray-900">
                  traditional Indian namkeens
                </strong>{" "}
                such as{" "}
                <strong className="font-semibold text-gray-900">
                  Bhujia, Diet Chiwda, Moong dal, and Mixtures
                </strong>
                . Our snacks are crafted not only to satisfy hunger but also to
                offer a sensory experience—flavorful, crisp, and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are + What We Offer */}
      <section className="w-full bg-[#F9F8F1]">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-8 lg:py-12">
          {/* Who We Are */}
          <div className="w-full">
            <h2 className="mb-3 text-center text-3xl font-medium text-[#00509D] sm:text-4xl">
              Who We Are
            </h2>

            <div className="space-y-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              <p>
                Founded under the umbrella of{" "}
                <strong className="font-semibold text-gray-900">
                  G.M. Exim Private Limited,
                </strong>{" "}
                <strong className="font-semibold text-gray-900">GME</strong> was
                established to serve the rising demand for quality snack foods
                in Eastern India and beyond. With our corporate office based in
                Patna, we remain deeply connected to our roots while
                continuously expanding our footprint across the Indian
                subcontinent.
              </p>

              <p>
                Our team comprises experienced food technologists, skilled
                workers, and dedicated professionals who share a common goal—to
                deliver quality with every packet. At GME, every snack is a
                product of passion, expertise, and stringent quality control. We
                understand the pulse of the Indian consumer and innovate
                regularly to meet changing tastes and preferences.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mt-8 w-full sm:mt-10">
            <h2 className="mb-3 text-center text-3xl font-medium text-[#00509D] sm:text-4xl">
              What We Offer
            </h2>

            <p className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              GME takes pride in offering a dynamic and diverse product line
              that satisfies a variety of palates. Our product range includes:
            </p>

            <div className="mt-5 space-y-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              <div className="flex items-start gap-3">
                <PackageCheck className="mt-1 h-5 w-5 shrink-0 text-[#00509D]" />
                <p>
                  <strong className="font-semibold text-gray-900">
                    Extruded Snacks:
                  </strong>{" "}
                  Known for their crunch and bold flavors, our fryums snacks are
                  perfect for those who enjoy modern, spicy, and fun snack
                  options.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <PackageCheck className="mt-1 h-5 w-5 shrink-0 text-[#00509D]" />
                <p>
                  <strong className="font-semibold text-gray-900">
                    Traditional Namkeens:
                  </strong>{" "}
                  We offer a selection of classic Indian snacks including
                  Bhujia, Diet Chiwda, Moong dal, and Mixtures. These are made
                  using traditional recipes with a contemporary twist to ensure
                  consistency and taste.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <PackageCheck className="mt-1 h-5 w-5 shrink-0 text-[#00509D]" />
                <p>
                  <strong className="font-semibold text-gray-900">
                    Roasted and Healthy Options:
                  </strong>{" "}
                  Understanding the growing demand for health-conscious snacks,
                  we are working on expanding our range to include roasted and
                  low-oil alternatives that retain flavor while promoting
                  wellness.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              Our snacks are manufactured using high-quality raw materials
              sourced from trusted suppliers. All products go through rigorous
              hygiene checks and are packaged using modern machinery to maintain
              freshness and quality from production to consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Our Manufacturing Facility */}
      <section className="w-full bg-[#FDFDFB]">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-8 lg:py-12">
          <div className="w-full">
            <h2 className="mb-3 text-center text-3xl font-medium text-[#00509D] sm:text-4xl">
              Our Manufacturing Facility
            </h2>

            <div className="space-y-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              <p>
                GME operates a fully equipped{" "}
                <strong className="font-semibold text-gray-900">
                  manufacturing unit in Hajipur, Vaishali (Bihar)
                </strong>
                . This strategic location not only ensures efficient production
                but also enables smooth logistics across multiple regions. The
                facility is outfitted with{" "}
                <strong className="font-semibold text-gray-900">
                  Modern Machinery and Automated Processing lines
                </strong>
                , minimizing human contact and ensuring hygienic conditions
                throughout the production cycle.
              </p>

              <p>
                Our team continuously monitors each step of the manufacturing
                process, from ingredient selection and mixing to frying,
                flavouring, and packaging. Quality control is at the core of our
                operations, and we comply with all{" "}
                <strong className="font-semibold text-gray-900">
                  FSSAI guidelines
                </strong>{" "}
                and other food safety standards. The integration of traditional
                knowledge with modern infrastructure allows us to offer snacks
                that are both authentic and consistently high in quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Market Presence */}
      <section className="w-full bg-[#F9F8F1]">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-8 lg:py-12">
          <div className="w-full">
            <h2 className="mb-3 text-center text-3xl font-medium text-[#00509D] sm:text-4xl">
              Our Market Presence
            </h2>

            <p className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              From a local brand to a regional powerhouse, GME has steadily
              expanded its presence across key markets in Eastern India. Today,
              our products enjoy widespread distribution across:
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Bihar",
                "Jharkhand",
                "Eastern Uttar Pradesh",
                "West Bengal",
                "North Eastern States",
              ].map((location) => (
                <div
                  key={location}
                  className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-[#ED1D26]" />

                  <span className="text-sm font-semibold text-gray-800">
                    {location}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              Thanks to a robust{" "}
              <strong className="font-semibold text-gray-900">
                distribution network
              </strong>{" "}
              and strategic partnerships with retailers and wholesalers, our
              products are readily available in{" "}
              <strong className="font-semibold text-gray-900">
                supermarkets, grocery stores, food marts
              </strong>
              , and{" "}
              <strong className="font-semibold text-gray-900">
                general provision outlets
              </strong>
              . Our logistics team ensures timely delivery and shelf
              availability, supporting retailers in delivering a consistent
              experience to their customers. We are also increasingly working
              towards enhancing our{" "}
              <strong className="font-semibold text-gray-900">
                e-commerce presence
              </strong>
              , enabling customers to access GME products online through
              regional platforms and marketplaces.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full font-serif text-[#111]">
        {/* Mission / Vision */}
        <div className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-7xl text-center">
            {/* Toggle */}
            <div className="mb-6 flex items-center justify-center gap-2 sm:mb-8 sm:gap-4">
              <button
                type="button"
                onClick={() => setIsVision(false)}
                className={`flex items-center gap-1.5 text-xs font-semibold transition-all sm:gap-2 sm:text-sm md:text-base ${
                  !isVision ? "text-black" : "text-[#07569E]"
                }`}
              >
                <Lightbulb
                  size={18}
                  strokeWidth={2.5}
                  className={!isVision ? "text-black" : "text-[#07569E]"}
                />
                <span>OUR MISSION</span>
              </button>

              <button
                type="button"
                onClick={() => setIsVision((prev) => !prev)}
                aria-label="Switch between mission and vision"
                className={`relative h-8 w-14 shrink-0 rounded-full p-1 transition-colors duration-300 sm:h-9 sm:w-16 ${
                  isVision ? "bg-[#ED1B24]" : "bg-[#E8F6FC]"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-all duration-300 sm:h-7 sm:w-7 ${
                    isVision
                      ? "translate-x-6 bg-[#ED1B24] sm:translate-x-7"
                      : "translate-x-0 bg-[#12A9E5]"
                  }`}
                >
                  {isVision ? (
                    <Rocket size={14} className="text-white sm:size-[15px]" />
                  ) : (
                    <span className="block h-3 w-3 rounded-full bg-[#12A9E5]" />
                  )}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setIsVision(true)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#07569E] transition-all sm:gap-2 sm:text-sm md:text-base"
              >
                <Rocket
                  size={18}
                  fill={isVision ? "#07569E" : "none"}
                  strokeWidth={2.5}
                />
                <span>OUR VISION</span>
              </button>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-[1500px] px-1 text-xs leading-6 sm:px-2 sm:text-sm sm:leading-6 md:text-base md:leading-7 lg:text-lg">
              {isVision ? visionContent : missionContent}
            </div>
          </div>
        </div>

        {/* Why Choose GME */}
        <section className="w-full bg-[#F9F8F1] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-7 text-center text-xl font-bold text-[#07569E] sm:mb-9 sm:text-2xl md:text-3xl lg:text-[30px]">
              Why Choose GME?
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="group flex min-h-[180px] w-full items-center gap-5 rounded-md bg-white px-5 py-6 shadow-[0_8px_25px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)] sm:min-h-[190px] sm:gap-6 sm:px-7 sm:py-7 md:min-h-[200px] lg:h-[210px]"
                  >
                    {/* Icon */}
                    <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] transition-all duration-300 group-hover:bg-[#07569E] sm:h-[64px] sm:w-[64px] md:h-[68px] md:w-[68px]">
                      <Icon
                        size={29}
                        strokeWidth={2.8}
                        className="text-[#07569E] transition-colors duration-300 group-hover:text-white sm:size-[32px] md:size-[34px]"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1.5 text-sm font-bold sm:mb-2 sm:text-base md:text-lg">
                        {reason.title}
                      </h3>

                      <p className="text-xs leading-5 sm:text-sm sm:leading-6 md:text-base">
                        {reason.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>

      {/* Join The GME Family */}
      <section className="w-full bg-[#F9F8F1]">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 text-center sm:px-6 sm:py-10 md:px-8 lg:py-12">
          <h2 className="mb-3 text-3xl font-medium text-[#00509D] sm:text-4xl">
            Join The GME Family
          </h2>

          <p className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
            Whether you’re a consumer looking for a trusted snack brand, a
            distributor interested in partnering with a fast-growing company, or
            a retailer aiming to offer quality products to your customers—
            <strong className="font-semibold text-gray-900">
              GME welcomes you
            </strong>
            . Together, let’s spread the joy of snacking—delicious, hygienic,
            and rooted in Indian tradition.
          </p>
        </div>
      </section>
    </main>
  );
}
