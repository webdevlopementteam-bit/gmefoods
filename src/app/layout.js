import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Topslider from "@/components/Topslider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/FloatingIcon";
import Breadcrumb from "@/components/Breadcrumb";

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
  title: "Gmefoods",
  description:
    "GME Foods, a brand of G.M Exim Pvt. Ltd. headquartered in Patna, Bihar, brings hygienic, high-quality, and delicious ready-to-eat snacks to India. From extruded snacks like Tuk Tuk, Fingers, Curly Masala Puff to traditional namkeens such as Bhujia, Diet Chiwda, Moong Dal, and Mixtures — GME blends authentic Indian flavors with modern food processing standards.",
  icons: {
    icon: "/logo/logo1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body>
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
