"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloating() {
  const phoneNumber = "918102914442";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex items-center rounded-full bg-[#25D366] text-white shadow-md transition-all duration-300 hover:shadow-lg sm:bottom-6 sm:right-6 hover:px-2"
    >
      {/* WhatsApp Text */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:mr-2 group-hover:max-w-[120px] group-hover:opacity-100 sm:text-base">
        WhatsApp
      </span>

      {/* WhatsApp Icon */}
      <span className="flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12">
        <FaWhatsapp className="text-[22px] transition-transform duration-300 group-hover:scale-110 sm:text-[26px]" />
      </span>
    </a>
  );
}
