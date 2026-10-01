import Link from "next/link";

export const metadata = {
  title: "That One Night I Craved Bhel in Mumbai | GME Foods Blog",
  description:
    "A late-night bhel craving in Mumbai turned into a memory worth sharing — a GME Foods blog story about street food, nostalgia and simple comforts.",
  alternates: {
    canonical:
      "/that-one-night-i-craved-bhel-in-mumbai-and-it-changed-everything",
  },
};

export default function BlogDetailPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F1] py-10 sm:py-14 lg:py-20">
      <article className="mx-auto w-[92%] max-w-4xl">
        <h1 className="text-2xl font-bold leading-tight text-[#1A1A1A] sm:text-3xl lg:text-4xl">
          That One Night I Craved Bhel in Mumbai and It Changed Everything
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <Link
            href="https://www.gmefoods.com/author/bizmartbharat/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#A67C00] hover:underline"
          >
            bizmartbharat
          </Link>

          <span>•</span>

          <span>June 3, 2025</span>

          <span>•</span>

          <Link
            href="https://www.gmefoods.com/category/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#A67C00] hover:underline"
          >
            Blog
          </Link>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-gray-700 sm:text-lg">
          <p>
            It was one of those nights—sweaty, loud, and somehow lonelier than
            it should’ve been. I’d just stormed out of a friend’s house after a
            petty argument over who was the better cricketer—Kohli or Tendulkar
            (I know, classic). My throat was dry from yelling, my stomach was
            empty, and the city was still buzzing like it never got the memo
            that it was 1:30 a.m.
          </p>

          <p>
            I was wandering around Bandra, grumbling under my breath, when I
            caught a whiff of something tangy, something spicy—
            <strong>bhel</strong>.
          </p>

          <p>
            Now look, I’ve had bhel a hundred times. It’s a Mumbai staple. But
            that night? It hit different.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
            A Crunch in the Chaos
          </h2>

          <p>
            There he was. An old guy with a makeshift stall, under a flickering
            streetlight, surrounded by scooters and stray dogs. His hands were
            fast—like a magician’s—tossing puffed rice, onions, chutneys, and
            god-knows-what into this greasy steel bowl. I watched like a kid
            seeing fireworks for the first time.
          </p>

          <p>
            “Ek bhel dena,” I mumbled, voice cracking more than I wanted to
            admit.
          </p>

          <p>
            He didn’t even look up. Just nodded and kept tossing. Lime juice.
            Sev. A mysterious green chutney that looked like it could melt
            metal—but tasted like magic.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
            Bhel as a Band-Aid
          </h2>

          <p>
            I leaned against a crumbling wall, took one bite, and I swear—it was
            like someone pressed pause on the chaos inside my head. The spice
            punched me, the sweetness followed like an apology, and the crunch?
            Man, that crunch was therapy.
          </p>

          <p>
            There was no fancy packaging, no Instagrammable bowl. Just a
            newspaper cone soaked through at the bottom and flavors that slapped
            me awake.
          </p>

          <p>
            It wasn’t just food. It was memory. School trips. Marine Drive
            walks. That one time I cried after my results and my mum handed me
            bhel instead of advice.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
            Why We Keep Coming Back
          </h2>

          <p>
            Bhel isn’t just street food in Mumbai. It’s a mood. It’s the city in
            edible form—messy, unpredictable, overloaded, but somehow… it works.
            You never get the same taste twice. Depends on the guy making it,
            the chutneys used, even your own damn mood.
          </p>

          <p>
            And that’s the charm. You don’t eat bhel to be full. You eat it to
            feel something.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
            That Night Ended Weird
          </h2>

          <p>
            I sat on that pavement longer than I care to admit. Called up my
            friend. We laughed about the fight. He still thinks Kohli’s better,
            the fool.
          </p>

          <p>
            But yeah. That night, the city didn’t feel so loud. My head didn’t
            feel so heavy. And all because of one paper cone of{" "}
            <strong>bhel</strong>.
          </p>

          <p>
            So next time you’re in Mumbai and life’s being a pain, skip the
            fancy cafés. Find a stall. Order bhel. Let it remind you that simple
            things can save your night. Or at least make it a bit less crap.
          </p>
        </div>

        {/* Leave a Reply */}
        <section className="mt-14 border-t border-[#ddd7c8] pt-10">
          <h2 className="text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
            Leave a Reply
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[#1A1A1A]"
              >
                Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-[#dcd6c7] bg-white px-4 py-3 outline-none transition focus:border-[#A67C00] focus:ring-1 focus:ring-[#A67C00]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#1A1A1A]"
              >
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-[#dcd6c7] bg-white px-4 py-3 outline-none transition focus:border-[#A67C00] focus:ring-1 focus:ring-[#A67C00]"
              />
            </div>

            <div>
              <label
                htmlFor="website"
                className="mb-2 block text-sm font-semibold text-[#1A1A1A]"
              >
                Website
              </label>
              <input
                id="website"
                name="website"
                type="url"
                className="w-full rounded-lg border border-[#dcd6c7] bg-white px-4 py-3 outline-none transition focus:border-[#A67C00] focus:ring-1 focus:ring-[#A67C00]"
              />
            </div>

            <div>
              <label
                htmlFor="comment"
                className="mb-2 block text-sm font-semibold text-[#1A1A1A]"
              >
                Add Comment*
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={6}
                required
                className="w-full resize-none rounded-lg border border-[#dcd6c7] bg-white px-4 py-3 outline-none transition focus:border-[#A67C00] focus:ring-1 focus:ring-[#A67C00]"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                name="save-info"
                className="mt-1 h-4 w-4 accent-[#A67C00]"
              />
              <span>
                Save my name, email and website in this browser for the next
                time I comment.
              </span>
            </label>
          </form>
        </section>
      </article>
    </main>
  );
}
