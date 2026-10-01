import {
  LayoutGrid,
  Factory,
  ShieldCheck,
  PackageCheck,
  MapPin,
} from "lucide-react";

const reasons = [
  {
    title: "Wide variety",
    desc: "Namkeen, chips and extruded snacks under one brand, so the whole family finds something they like.",
    icon: LayoutGrid,
    color: "#00509D",
  },
  {
    title: "Traditional taste, modern processing",
    desc: "Familiar Indian flavours made with modern machinery and automated lines.",
    icon: Factory,
    color: "#F0264C",
  },
  {
    title: "Hygiene and quality checks",
    desc: "Production is monitored at every stage, from ingredient selection and mixing to frying, flavouring and packaging, and follows applicable FSSAI guidelines.",
    icon: ShieldCheck,
    color: "#2E9E5B",
  },
  {
    title: "Crunchy, sealed packaging",
    desc: "Packs are designed to keep snacks fresh and crisp.",
    icon: PackageCheck,
    color: "#F0AD4E",
  },
  {
    title: "Made in Bihar",
    desc: "Headquartered in Patna, with a manufacturing unit in Hajipur, Vaishali.",
    icon: MapPin,
    color: "#57366B",
  },
];

export default function Why_Choose_Us() {
  return (
    <section className="relative overflow-hidden bg-[#004383] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-16">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="font-playfair text-sm font-semibold uppercase tracking-wider text-[#F0AD4E] sm:text-base">
            The GME Difference
          </p>
          <h2 className="mt-2 font-playfair text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Why Choose GME Foods?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F0264C]" />
        </div>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-6 sm:mt-12">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group w-full max-w-[380px] rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)] sm:w-[calc(50%-12px)] sm:p-7 lg:w-[calc(33.333%-16px)]"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${reason.color}1A` }}
                >
                  <Icon
                    size={28}
                    strokeWidth={2}
                    style={{ color: reason.color }}
                  />
                </div>

                <p className="mt-5 font-playfair text-lg font-bold text-gray-900">
                  {reason.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  {reason.desc}
                </p>

                <div
                  className="mt-5 h-[3px] w-10 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: reason.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
