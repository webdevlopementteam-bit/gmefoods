// app/management/page.js

import Image from "next/image";

export const metadata = {
  title: "Management Team | Navin Kumar Motani & Sumit Saraf | GME",
  description:
    "Meet the leadership team of GME Foods (G.M. Exim Pvt. Ltd.): Chairman & MD Navin Kumar Motani and Director Sumit Saraf, Chartered Accountant.",
  keywords: ["GME Foods management team"],
  alternates: {
    canonical: "/management-team",
  },
};

export default function ManagementPage() {
  return (
    <main className="w-full overflow-hidden bg-[#F9F8F1]">
      {/* ==================== NAVIN KUMAR MOTANI ==================== */}
      <section className="w-full bg-[#F9F8F1]">
        <div className="mx-auto w-full max-w-7xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 lg:px-8 lg:py-6">
          {/* Top Content */}
          <div className="grid w-full grid-cols-1 items-center gap-5 rounded-xl bg-white p-4 sm:p-5 md:grid-cols-2 md:gap-7 lg:gap-8 lg:p-6">
            {/* Left Image */}
            <div className="flex w-full justify-center">
              <div className="w-full max-w-[300px] overflow-hidden rounded-xl sm:max-w-[340px] md:max-w-[320px] lg:max-w-[370px]">
                <Image
                  src="/management-team/Navin Kumar Motani.png"
                  alt="Mr. Sumit Saraf"
                  width={600}
                  height={800}
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 320px, 360px"
                  className="h-[280px] w-full rounded-xl object-contain object-center sm:h-[320px] md:h-[340px] lg:h-[380px]"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full">
              <h1 className="mb-2 text-3xl font-medium leading-tight text-[#00509D] sm:text-4xl">
                Navin Kumar Motani
              </h1>

              <h2 className="mb-3 text-lg font-semibold text-gray-800 sm:text-xl">
                Chairman &amp; Managing Director
              </h2>

              <div className="space-y-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                <p>
                  <strong className="font-semibold text-gray-900">
                    Mr. Navin Kumar Motani
                  </strong>{" "}
                  is a visionary leader whose entrepreneurial acumen and
                  foresight have shaped{" "}
                  <strong className="font-semibold text-gray-900">
                    G.M Exim Private Limited
                  </strong>{" "}
                  into a respected name in{" "}
                  <strong className="font-semibold text-gray-900">
                    ready-to-eat food industry
                  </strong>
                  . With more than{" "}
                  <strong className="font-semibold text-gray-900">
                    30 years of diverse experience
                  </strong>
                  , Mr. Motani has continually demonstrated a unique ability to
                  identify emerging market trends, diversify operations, and
                  drive sustainable growth in highly competitive sectors.
                  Recognizing the growing demand for{" "}
                  <strong className="font-semibold text-gray-900">
                    quick, hygienic, and flavorful snacking solutions
                  </strong>
                  , Mr. Motani strategically launched{" "}
                  <strong className="font-semibold text-gray-900">GME</strong>
                  —the company’s venture into the{" "}
                  <strong className="font-semibold text-gray-900">
                    ready-to-eat food segment
                  </strong>
                  . Under his guidance, GME has emerged as a fast-growing brand
                  offering a blend of traditional Indian taste and modern food
                  innovation.
                </p>

                <p>
                  What sets Mr. Motani apart as a leader is his clear{" "}
                  <strong className="font-semibold text-gray-900">
                    vision for transforming the snacking industry
                  </strong>
                  . He envisioned GME not just as a product line, but as a{" "}
                  <strong className="font-semibold text-gray-900">
                    consumer-focused brand
                  </strong>{" "}
                  that delivers taste, trust, and quality with every bite. This
                  vision is reflected in GME’s carefully curated product range,
                  which includes:
                </p>
              </div>
            </div>
          </div>

          {/* Full Width Content */}
          <div className="mt-4 w-full rounded-xl bg-white p-4 sm:mt-5 sm:p-5 lg:p-6">
            <div className="space-y-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-[11px] text-white">
                  ✓
                </span>
                <p>
                  <strong className="font-semibold text-gray-900">
                    Extruded Snacks:
                  </strong>{" "}
                  Produced using state-of-the-art extrusion technology, these
                  crunchy, fun-shaped snacks are popular among all age groups.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-[11px] text-white">
                  ✓
                </span>
                <p>
                  <strong className="font-semibold text-gray-900">
                    Traditional Namkeens:
                  </strong>{" "}
                  Inspired by regional Indian flavors, these snacks preserve
                  authenticity while meeting modern hygiene standards.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-[11px] text-white">
                  ✓
                </span>
                <p>
                  <strong className="font-semibold text-gray-900">
                    Roasted and Healthy Options:
                  </strong>{" "}
                  Catering to the health-conscious segment, GME offers roasted,
                  low-fat snacks that provide both nutrition and flavor.
                </p>
              </div>

              <p>
                Mr. Motani ensures that every aspect of the brand—from{" "}
                <strong className="font-semibold text-gray-900">
                  ingredient sourcing and production to packaging and
                  distribution
                </strong>{" "}
                – is driven by{" "}
                <strong className="font-semibold text-gray-900">
                  quality assurance and innovation
                </strong>
                . He leads with a focus on scalability, sustainability, and
                customer satisfaction, ensuring that GME consistently meets
                evolving consumer needs.
              </p>

              <p>
                Beyond product success, Mr. Motani is also a believer in{" "}
                <strong className="font-semibold text-gray-900">
                  inclusive growth
                </strong>
                . He has fostered a wrk culture that empowers teams, promotes
                skill development, and encourages ethical business conduct. His
                leadership is marked by clarity, consistency, and a strong
                belief in long-term value creation.
              </p>

              <p>
                As the food industry continues to evolve, Mr. Navin Kumar Motani
                remains ahead of the curve—{" "}
                <strong className="font-semibold text-gray-900">
                  blending tradition with technology
                </strong>
                , and scaling local flavors to national and international
                markets. His ability to think beyond the present and anticipate
                future opportunities has made him a{" "}
                <strong className="font-semibold text-gray-900">
                  true change-maker
                </strong>{" "}
                in the Indian FMCG space.
              </p>

              <p>
                Today, under his stewardship,{" "}
                <strong className="font-semibold text-gray-900">
                  G.M Exim
                </strong>{" "}
                and GME are well-positioned for continued innovation, market
                expansion, and excellence—anchored by a leader whose vision goes
                far beyond business, toward building a brand that becomes a
                household name across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SUMIT SARAF ==================== */}
      <section className="w-full bg-[#F9F8F1]">
        <div className="mx-auto w-full max-w-7xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 lg:px-8 lg:py-6">
          {/* Top Content */}
          <div className="grid w-full grid-cols-1 items-center gap-5 rounded-xl bg-white p-4 sm:p-5 md:grid-cols-2 md:gap-7 lg:gap-8 lg:p-6">
            {/* Left Image */}
            <div className="flex w-full justify-center">
              <div className="w-full max-w-[300px] overflow-hidden rounded-xl sm:max-w-[340px] md:max-w-[320px] lg:max-w-[360px]">
                <Image
                  src="/management-team/Mr. Sumit Saraf.png"
                  alt="Mr. Navin Kumar Motani"
                  width={700}
                  height={700}
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 320px, 360px"
                  className="h-[280px] w-full rounded-xl object-cover object-center sm:h-[320px] md:h-[340px] lg:h-[380px]"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full">
              <h2 className="mb-2 text-3xl font-medium leading-tight text-[#00509D] sm:text-4xl">
                Mr. Sumit Saraf
              </h2>

              <h3 className="mb-3 text-lg font-semibold text-gray-800 sm:text-xl">
                Director – Finance &amp; Strategy
              </h3>

              <div className="space-y-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                <p>
                  <strong className="font-semibold text-gray-900">
                    Mr. Sumit Saraf
                  </strong>
                  , a qualified{" "}
                  <strong className="font-semibold text-gray-900">
                    Chartered Accountant
                  </strong>
                  , brings over{" "}
                  <strong className="font-semibold text-gray-900">
                    12 years of dedicated experience
                  </strong>{" "}
                  to{" "}
                  <strong className="font-semibold text-gray-900">
                    G.M Exim Private Limited
                  </strong>
                  , where he plays a critical leadership role in overseeing the
                  company’s{" "}
                  <strong className="font-semibold text-gray-900">
                    financial management, strategic planning, and operational
                    efficiency
                  </strong>
                  . With a sharp analytical mindset and a thorough understanding
                  of financial frameworks, Mr. Saraf has been instrumental in
                  strengthening the organization’s core functions and supporting
                  its sustained growth.
                </p>

                <p>
                  Since joining G.M Exim, Mr. Saraf has worked closely with the
                  senior leadership to streamline processes, implement robust
                  financial controls, and drive cost optimization initiatives.
                  His deep expertise in{" "}
                  <strong className="font-semibold text-gray-900">
                    corporate finance, taxation, risk assessment, and regulatory
                    compliance
                  </strong>{" "}
                  ensures that the company consistently operates with financial
                  discipline and transparency.
                </p>

                <p>
                  As the company expanded into the{" "}
                  <strong className="font-semibold text-gray-900">
                    ready-to-eat food industry
                  </strong>{" "}
                  through its flagship brand{" "}
                  <strong className="font-semibold text-gray-900">GME</strong>,
                  Mr. Saraf played a pivotal role in building a scalable
                  financial structure to support the new vertical.
                </p>
              </div>
            </div>
          </div>

          {/* Full Width Content */}
          <div className="mt-4 w-full rounded-xl bg-white p-4 sm:mt-5 sm:p-5 lg:p-6">
            <div className="space-y-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              <p>
                From project feasibility analysis and capital budgeting to
                managing vendor relationships and financial reporting, he has
                ensured that every business decision is backed by data-driven
                insight and long-term sustainability.
              </p>

              <p>
                Beyond numbers,{" "}
                <strong className="font-semibold text-gray-900">
                  Mr. Saraf is also known for his strategic vision
                </strong>{" "}
                and collaborative leadership style. He works cross-functionally
                with production, and logistics teams to align financial
                strategies with operational goals. His ability to forecast
                market trends and adapt financial plans accordingly has helped G
                M Exim remain agile in an ever-evolving business environment.
              </p>

              <p>
                His contributions have been central to the company’s journey—to
                becoming a rising player in the{" "}
                <strong className="font-semibold text-gray-900">
                  FMCG and ready-to-eat snack segment
                </strong>
                . Committed to excellence and continuous improvement, Mr. Sumit
                Saraf brings both stability and innovation to the financial
                backbone of the organization.
              </p>

              <p>
                With a strong foundation in finance and a forward-looking
                approach, Mr. Saraf continues to support the company’s mission
                of growth, accountability, and customer value—ensuring that{" "}
                <strong className="font-semibold text-gray-900">
                  G.M Exim
                </strong>{" "}
                is well-positioned for the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
