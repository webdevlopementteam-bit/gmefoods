// app/components/Navbar.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "#",
    dropdown: true,
    children: [
      {
        label: "About GME",
        href: "/about-us",
      },
      {
        label: "Management Team",
        href: "/management-team",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

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

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (href) => {
    return pathname === href;
  };

  const isDropdownActive = (item) => {
    if (!item.children) return false;

    return item.children.some((child) => pathname === child.href);
  };

  const navLinkClass = (item) => {
    const active = isActive(item.href) || isDropdownActive(item);

    return `relative flex items-center gap-2 px-1 py-2 text-[17px] font-semibold tracking-[0.01em] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-center after:bg-[#ED1D26] after:transition-transform after:duration-300 ${
      active
        ? "text-[#ED1D26] after:scale-x-100"
        : "text-gray-800 after:scale-x-0 hover:text-[#ED1D26] hover:after:scale-x-100"
    }`;
  };

  const mobileLinkClass = (item) => {
    const active = isActive(item.href);

    return `flex w-full items-center border-l-[3px] px-5 py-3 text-[17px] font-semibold transition-all duration-300 ${
      active
        ? "border-[#ED1D26] bg-[#ED1D26]/5 text-[#ED1D26]"
        : "border-transparent text-gray-800 hover:border-[#ED1D26] hover:bg-gray-50 hover:text-[#ED1D26]"
    }`;
  };

  return (
    <nav className="relative z-50 border-b border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <div className="mx-auto grid h-[100px] w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center px-2 sm:px-3 lg:h-[110px] lg:px-4 xl:h-[140px] xl:px-0">
        {/* ================= LOGO ================= */}
        <div className="flex items-center justify-start">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/logo/logo1.png"
              alt="GME Logo"
              width={250}
              height={250}
              className="h-[85px] w-auto object-contain sm:h-[95px] lg:h-[105px] xl:h-[140px]"
              priority
            />
          </Link>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden items-center justify-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.dropdown) {
                  setOpenDropdown(item.label);
                }
              }}
              onMouseLeave={() => {
                if (item.dropdown) {
                  setOpenDropdown(null);
                }
              }}
            >
              {item.dropdown ? (
                <>
                  {/* Dropdown Trigger */}
                  <div className={`${navLinkClass(item)} text-sm xl:text-base`}>
                    {item.label}

                    <FaChevronDown
                      className={`text-[10px] transition-transform duration-300 xl:text-[11px] ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Dropdown */}
                  {openDropdown === item.label && (
                    <div className="absolute left-1/2 top-full z-50 w-[210px] -translate-x-1/2 pt-4">
                      <div className="overflow-hidden rounded-lg border border-gray-100 bg-white py-2 shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`mx-2 block rounded-md px-4 py-3 text-sm font-medium transition-all duration-200 ${
                              pathname === child.href
                                ? "bg-[#ED1D26]/10 text-[#ED1D26]"
                                : "text-gray-700 hover:bg-[#ED1D26]/10 hover:text-[#ED1D26]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`${navLinkClass(item)} text-sm xl:text-base`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* ================= DESKTOP SOCIAL ICONS ================= */}
        <div className="hidden items-center justify-end gap-1.5 lg:flex xl:gap-2">
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
                className={`flex h-9 w-9 items-center justify-center rounded-full ${social.bg} text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md xl:h-10 xl:w-10`}
              >
                <Icon className={social.size} />
              </a>
            );
          })}
        </div>

        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className={`ml-auto flex h-11 w-11 items-center justify-center rounded-md border text-[22px] transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "border-[#ED1D26] bg-[#ED1D26] text-white"
              : "border-gray-200 text-gray-800 hover:border-[#ED1D26] hover:text-[#ED1D26]"
          }`}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white shadow-xl lg:hidden">
          <div className="py-3">
            {navLinks.map((item) => (
              <div key={item.label}>
                {/* Mobile Dropdown */}
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label,
                        )
                      }
                      className={`flex w-full items-center justify-between border-l-[3px] px-5 py-3 text-left text-[17px] font-semibold transition-all ${
                        isDropdownActive(item) || openDropdown === item.label
                          ? "border-[#ED1D26] bg-[#ED1D26]/5 text-[#ED1D26]"
                          : "border-transparent text-gray-800 hover:border-[#ED1D26] hover:text-[#ED1D26]"
                      }`}
                    >
                      {item.label}

                      <FaChevronDown
                        className={`text-xs transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === item.label && (
                      <div className="border-y border-gray-100 bg-gray-50 py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className={`block px-10 py-3 text-sm font-medium transition ${
                              pathname === child.href
                                ? "text-[#ED1D26]"
                                : "text-gray-700 hover:text-[#ED1D26]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Normal Mobile Link */
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={mobileLinkClass(item)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Social Icons */}
            <div className="mt-2 flex items-center gap-3 border-t border-gray-100 px-5 pb-3 pt-5">
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
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${social.bg} text-white`}
                  >
                    <Icon className={social.size} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
