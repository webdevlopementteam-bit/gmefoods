const faqs = [
  {
    question: "Which are the popular chips and namkeen brands in Bihar?",
    answer:
      "Bihar has both local and national snack brands, and local brands are often made to suit regional taste. GME Foods, based in Patna, is a Bihar-based brand that offers Bhujia, Diet Chiwda, Moong Dal, Mumbai Bhel, chips and extruded snacks.",
  },
  {
    question: "Which is the best chips and namkeen brand in Bihar?",
    answer:
      "The best brand depends on your taste and needs. Compare brands on freshness, taste consistency, hygiene, variety and availability. A brand that gives you the same taste and crunch in every packet is the right choice for you.",
  },
  {
    question: "How do I choose a good packaged namkeen or chips brand?",
    answer:
      "Check the manufacturing and expiry date, the FSSAI licence number on the pack, and whether the packaging is sealed and air-tight. The snack should feel crisp, not soft or oily-smelling. Also look for variety and easy availability in your area.",
  },
  {
    question: "What types of namkeen and chips does GME Foods offer?",
    answer:
      "GME Foods offers Aloo Bhujia, Paneer Bhujia, Diet Chiwda, Moong Dal, mixtures, Chatori, Badaam Pakoda, Mumbai Bhel, Kasturi Masala Mix and Jhal Mix. Its chips and extruded snacks include Tuk Tuk, Fingers, Curly Masala Puff, Crazy Rings, Manchu King and Soya Sticks.",
  },
  {
    question: "Which GME snacks are good for kids?",
    answer:
      "Kids usually enjoy extruded snacks such as Tuk Tuk, Crazy Rings, Fingers and Curly Masala Puff. Noodles, Pasta and Tomato Katori are also popular with customers.",
  },
  {
    question: "Which namkeen goes best with evening tea?",
    answer:
      "Aloo Bhujia, Paneer Bhujia, Moong Dal and Badaam Pakoda are popular choices with evening chai.",
  },
  {
    question: "Where are GME Foods snacks manufactured?",
    answer:
      "GME Foods snacks are made at the company's manufacturing unit in Hajipur, Vaishali, Bihar. The head office is in Patna.",
  },
  {
    question: "How does GME Foods maintain quality and hygiene?",
    answer:
      "According to the company, production uses modern machinery and automated lines to reduce human contact. Each stage, from ingredient selection and mixing to frying, flavouring and packaging, is monitored, every batch goes through quality checks, and operations follow applicable FSSAI guidelines.",
  },
  {
    question: "Where can I buy GME Foods chips and namkeen?",
    answer:
      "GME products are distributed across Bihar, Jharkhand, Eastern Uttar Pradesh, West Bengal and the North Eastern States. They are available at supermarkets, grocery stores, food marts and general provision stores. For availability in your area, call 18008894699.",
  },
  {
    question: "How can I become a GME Foods retailer or distributor?",
    answer:
      "GME Foods welcomes retailers and distributors. To discuss territory, margins and minimum order quantity, contact the company on 18008894699 or at gmeximpvtltd@gmail.com.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home_Faq() {
  return (
    <section className="bg-[#F9F8F1] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-center font-playfair text-2xl font-bold text-[#00509D] sm:text-3xl md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg bg-white p-5 shadow-sm sm:p-6"
            >
              <summary className="cursor-pointer list-none font-playfair text-base font-semibold text-gray-900 sm:text-lg">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
