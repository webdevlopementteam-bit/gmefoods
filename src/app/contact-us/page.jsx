"use client";

import { Phone, Mail, MapPin, User, Send, ShieldCheck } from "lucide-react";

export default function contact() {
  return (
    <main className="bg-[#F9F8F1] text-gray-900">
      {/* ================= HERO / CONTACT CARDS ================= */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-10 text-center lg:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A67C00]">
              Contact Us
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Get In Touch With Us
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Have a question or need more information? Our team is here to
              help. Get in touch with us and we will be happy to assist you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-7">
            {/* Call Card */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#A67C00]/10 text-[#A67C00] transition-all duration-300 group-hover:bg-[#A67C00] group-hover:text-white">
                  <Phone size={25} strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold">Get In Touch</h2>

                  <a
                    href="tel:18008894699"
                    className="mt-2 inline-block text-sm font-medium text-gray-600 transition-colors hover:text-[#A67C00]"
                  >
                    18008894699
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#A67C00]/10 text-[#A67C00] transition-all duration-300 group-hover:bg-[#A67C00] group-hover:text-white">
                  <Mail size={25} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-semibold">Email Id</h2>

                  <a
                    href="mailto:gmeximpvtltd@gmail.com"
                    className="mt-2 block break-all text-sm font-medium text-gray-600 transition-colors hover:text-[#A67C00]"
                  >
                    gmeximpvtltd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#A67C00]/10 text-[#A67C00] transition-all duration-300 group-hover:bg-[#A67C00] group-hover:text-white">
                  <MapPin size={25} strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold">Locations</h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    302 Ashiana Chambers, Exhibition Road, Patna-800001, Bihar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= MESSAGE + IMAGE ================= */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[350px] overflow-hidden lg:min-h-[650px]">
              <img
                src="/contact/contact.png"
                alt="Contact Us"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-7 sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                  We Are Here To Help
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Let&apos;s Start a Conversation
                </h2>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 sm:p-9 lg:p-12">
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#A67C00]">
                  Contact Us
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl">
                  Drop Us a Message
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Fill in the details below and our team will get back to you
                  shortly.
                </p>
              </div>

              <form className="space-y-5">
                {/* First + Last Name */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        id="firstName"
                        type="text"
                        placeholder="Enter first name"
                        className="w-full rounded-xl border border-gray-200 bg-[#F9F8F1]/50 py-3.5 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#A67C00] focus:ring-2 focus:ring-[#A67C00]/10"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      placeholder="Enter last name"
                      className="w-full rounded-xl border border-gray-200 bg-[#F9F8F1]/50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#A67C00] focus:ring-2 focus:ring-[#A67C00]/10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-gray-200 bg-[#F9F8F1]/50 py-3.5 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#A67C00] focus:ring-2 focus:ring-[#A67C00]/10"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-gray-200 bg-[#F9F8F1]/50 py-3.5 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#A67C00] focus:ring-2 focus:ring-[#A67C00]/10"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#F9F8F1]/50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#A67C00] focus:ring-2 focus:ring-[#A67C00]/10"
                  />
                </div>

                {/* I'm not a robot */}
                <div className="flex items-center rounded-xl border border-gray-200 bg-[#F9F8F1]/50 p-4">
                  <input
                    id="robot"
                    type="checkbox"
                    className="h-5 w-5 cursor-pointer accent-[#A67C00]"
                  />

                  <label
                    htmlFor="robot"
                    className="ml-3 flex cursor-pointer items-center gap-2 text-sm text-gray-600"
                  >
                    <ShieldCheck size={17} className="text-[#A67C00]" />
                    I&apos;m not a robot
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#A67C00] px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#8F6900] hover:shadow-lg"
                >
                  Submit Message
                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ================= GOOGLE MAP ================= */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=10%2C%20Exhibition%20Rd%2C%20near%20Gandhi%20Maidan%20Road%2C%20Salimpur%20Ahra%2C%20Golambar%2C%20Patna%2C%20Bihar%20800001%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-4 flex max-w-2xl items-center justify-center gap-2 text-sm leading-6 text-gray-600 transition-colors hover:text-[#A67C00] sm:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 shrink-0 text-[#A67C00]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <span>
                302 Ashiana Chambers, Exhibition Road, Patna-800001, Bihar
              </span>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:rounded-3xl">
            <iframe
              title="Google Map - Ashiana Tower, Patna"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.729933956329!2d85.1441667!3d25.6138889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5859130f97d5%3A0x1f6f070f24fca97!2sAshiana%20tower!5e0!3m2!1sen!2sin!4v1788866029618!5m2!1sen!2sin"
              className="h-[320px] w-full border-0 sm:h-[430px] lg:h-[520px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
