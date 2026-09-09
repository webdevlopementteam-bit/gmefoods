"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight, FaHome } from "react-icons/fa";

const breadcrumbData = {
  "/about-us": {
    title: "About GME",
    image: "/breadcrumb/about_gme.webp",
  },

  "/management-team": {
    title: "Management Team",
    image: "/breadcrumb/management-team.webp",
  },

  "/products": {
    title: "Products",
    image: "/breadcrumb/products.png",
  },

  "/contact-us": {
    title: "Contact Us",
    image: "/breadcrumb/contact-us.png",
  },

  "/blog": {
    title: "Blog",
    image: "/breadcrumb/about_gme.webp",
  },
};

export default function Breadcrumb() {
  const pathname = usePathname();

  const currentPage = breadcrumbData[pathname];

  // Home page par breadcrumb show nahi hoga
  if (pathname === "/" || !currentPage) {
    return null;
  }

  return (
    <section className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden sm:min-h-[260px] lg:min-h-[300px]">
      {/* Background Image */}
      {currentPage.image ? (
        <Image
          src={currentPage.image}
          alt={currentPage.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gray-800" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Page Title */}
        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {currentPage.title}
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-sm font-medium text-white sm:text-base">
          <Link
            href="/"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-[#ED1D26]"
          >
            <FaHome className="text-sm" />
            <span>Home</span>
          </Link>

          <FaChevronRight className="text-[10px] text-white/70" />

          <span className="text-white/90">{currentPage.title}</span>
        </div>
      </div>
    </section>
  );
}
