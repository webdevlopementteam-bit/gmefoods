import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Topslider from "@/components/Topslider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/FloatingIcon";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_URL } from "@/lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gmefoods",
  description:
    "GME Foods, a brand of G.M Exim Pvt. Ltd. headquartered in Patna, Bihar, brings hygienic, high-quality, and delicious ready-to-eat snacks to India. From extruded snacks like Tuk Tuk, Fingers, Curly Masala Puff to traditional namkeens such as Bhujia, Diet Chiwda, Moong Dal, and Mixtures — GME blends authentic Indian flavors with modern food processing standards.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo/logo1.png",
  },
  verification: {
    google: "jUe7_Iap6mnOkQyqPvaduWPT0DBdH5J8rn0lzUdRBn4",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GME Foods",
  legalName: "G.M. Exim Private Limited",
  alternateName: "GME",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/logo1.png`,
  image: `${SITE_URL}/logo/logo1.png`,
  description:
    "GME Foods, a brand of G.M Exim Pvt. Ltd. headquartered in Patna, Bihar, makes ready-to-eat snacks: namkeen, chips and extruded snacks, manufactured in Hajipur, Vaishali.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "302 Ashiana Chambers, Exhibition Road",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-18008894699",
    contactType: "customer service",
    email: "gmeximpvtltd@gmail.com",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/gmefoods/",
    "https://www.instagram.com/_thegme_",
    "https://www.linkedin.com/company/gme-foods/",
    "https://www.youtube.com/@GMEFoods-w6/videos",
    "https://in.pinterest.com/gmeximpvtltd/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Topslider />
        <Navbar />
        <Breadcrumb />
        {children}
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
