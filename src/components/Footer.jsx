// components/Footer.jsx

import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/gmefoods/",
    icon: FaFacebookF,
    bg: "bg-[#1877F2]",
    size: "text-[18px]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_thegme_",
    icon: FaInstagram,
    bg: "bg-[#E1306C]",
    size: "text-[19px]",
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/gmeximpvtltd/?invite_code=ec66d3f1a5724024959afe52c971446c&sender=1033365214407567166",
    icon: FaPinterestP,
    bg: "bg-[#E60023]",
    size: "text-[18px]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gme-foods/",
    icon: FaLinkedinIn,
    bg: "bg-[#0A66C2]",
    size: "text-[17px]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@GMEFoods-w6/videos",
    icon: FaYoutube,
    bg: "bg-[#FF0000]",
    size: "text-[19px]",
  },
];
export default function Footer() {
  return (
    <footer className="font-playfair w-full bg-gradient-to-r from-[#014C98] to-[#0A1B52] text-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="w-full px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-14">
        <div
          className="
            grid w-full grid-cols-1 gap-10
            sm:grid-cols-2 sm:gap-12
            lg:grid-cols-[2.3fr_1fr_1fr_2.3fr]
            lg:gap-8
            xl:grid-cols-[2.5fr_0.9fr_0.9fr_2.5fr]
            xl:gap-10
          "
        >
          {/* ================= ABOUT US ================= */}

          <div className="w-full min-w-0">
            <h2 className="mb-5 text-2xl font-bold ">About Us</h2>

            <p className="text-base leading-7 text-white/90 sm:text-[17px] sm:leading-8">
              We are a manufacturer and marketer of ready-to-eat snacks that
              include both extruded snacks commonly known as fryums or Kurkure
              and traditional India snacks such as bhujiyas, chivda, namkeens,
              moong dal etc.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg sm:h-11 sm:w-11 ${social.bg}`}
                  >
                    <Icon className={social.size} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="w-full min-w-0">
            <h2 className="mb-5 text-2xl font-bold ">Quick Links</h2>

            <ul className="space-y-3.5 sm:space-y-4">
              <li>
                <Link
                  href="/"
                  className="group flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:text-white sm:text-[17px]"
                >
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/about-us"
                  className="group flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:text-white sm:text-[17px]"
                >
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>About Us</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="group flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:text-white sm:text-[17px]"
                >
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>Products</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="group flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:text-white sm:text-[17px]"
                >
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>Blog</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="group flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:text-white sm:text-[17px]"
                >
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="w-full min-w-0">
            <h2 className="mb-5 text-2xl font-bold ">Products</h2>

            <ul className="space-y-3.5 sm:space-y-4">
              <li>
                <a
                  href="/products"
                  className="group flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:text-white sm:text-[17px]"
                >
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>Diet Chiwda</span>
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="group flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:text-white sm:text-[17px]"
                >
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>Paneer Bhujia</span>
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="group flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:text-white sm:text-[17px]"
                >
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>Chatori</span>
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="group flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:text-white sm:text-[17px]"
                >
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>Badaam Pakoda</span>
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="group flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:text-white sm:text-[17px]"
                >
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>Mumbai Bhel</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT US ================= */}
          <div className="w-full min-w-0">
            <h2 className="mb-5 text-2xl font-bold ">Contact Us</h2>
            <div className="space-y-4 text-base text-white/90 sm:text-[17px]">
              {/* Phone */}
              <a
                href="tel:18008894699"
                className="flex items-start gap-3 transition-colors duration-300 hover:text-white"
              >
                <Phone size={21} className="mt-1 shrink-0" />
                <span>18008894699</span>
              </a>

              {/* Email */}
              <a
                href="mailto:gmeximpvtltd@gmail.com"
                className="flex min-w-0 items-start gap-3 transition-colors duration-300 hover:text-white"
              >
                <Mail size={21} className="mt-1 shrink-0" />
                <span className="break-all">gmeximpvtltd@gmail.com</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={22} className="mt-1 shrink-0" />

                <span className="leading-7">
                  302 Ashiana Chambers, Exhibition Road, Patna-800001, Bihar
                </span>
              </div>
            </div>

            {/* ================= GOOGLE MAP ================= */}
            <div className="mt-6 h-[120px] w-full overflow-hidden rounded-lg border border-white/30 sm:h-[140px] md:h-[150px] lg:h-[140px] xl:h-[150px]">
              <iframe
                title="GME Foods Location - Ashiana Tower, Patna"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.729933956329!2d85.1441667!3d25.6138889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5859130f97d5%3A0x1f6f070f24fca97!2sAshiana%20tower!5e0!3m2!1sen!2sin!4v1788866334363!5m2!1sen!2sin"
                className="block h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {/* ================= ADDRESS ================= */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=10%2C%20Exhibition%20Rd%2C%20near%20Gandhi%20Maidan%20Road%2C%20Salimpur%20Ahra%2C%20Golambar%2C%20Patna%2C%20Bihar%20800001%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm leading-6 text-white/80 transition-colors hover:text-white"
            >
              302 Ashiana Chambers, Exhibition Road, Patna-800001, Bihar
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM COPYRIGHT ================= */}
      <div className="border-t border-white">
        <div className="w-full px-5 py-5 text-center text-sm leading-6 text-white sm:px-8 sm:text-base">
          Copyright © 2025 GME FOODS&nbsp; All Right Reserved | Powered by{" "}
          <a
            href="https://www.cybertricksmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#FFCC00] underline-offset-4 transition-all duration-300 hover:underline"
          >
            CyberTricks Media Pvt Ltd
          </a>
        </div>
      </div>
    </footer>
  );
}
