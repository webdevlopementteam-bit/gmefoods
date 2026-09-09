import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F1] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto w-[92%] max-w-6xl">
        {/* Blog Card */}
        <div className="flex justify-start">
          <article className="group flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-[#e5dfcf] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
            {/* Blog Title */}
            <div className="px-6 pt-7">
              <p className="text-black">Blog</p>
              <Link
                href="/that-one-night-i-craved-bhel-in-mumbai-and-it-changed-everything"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl font-bold leading-snug text-[#1A1A1A] transition-colors duration-300 hover:text-[#A67C00]">
                  That One Night I Craved Bhel in Mumbai and It Changed
                  Everything
                </h2>
              </Link>
            </div>

            {/* Image */}
            <Link
              href="https://www.gmefoods.com/that-one-night-i-craved-bhel-in-mumbai-and-it-changed-everything/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block overflow-hidden"
            >
              <div className="relative h-[280px] w-full">
                <Image
                  src="/blog/That One Night I Craved Bhel in Mumbai and It Changed Everything.png"
                  alt="That One Night I Craved Bhel in Mumbai and It Changed Everything"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              {/* Description */}
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                It was one of those nights—sweaty, loud, and somehow lonelier
                than it should’ve been. I’d just stormed out of a friend’s house
                after a petty argument over who was the better cricketer— Kohli
                or Tendulkar (I know, classic). My throat was…
              </p>

              {/* Author + Date */}
              <div className="mt-auto pt-7">
                <div className="flex items-center gap-2 border-t border-[#eee9dc] pt-5 text-xs sm:text-sm">
                  <Link
                    href="https://www.gmefoods.com/author/bizmartbharat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#A67C00] transition-colors hover:text-[#806000] hover:underline"
                  >
                    bizmartbharat
                  </Link>

                  <span className="text-gray-400">/</span>

                  <span className="text-gray-500">June 3, 2025</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
