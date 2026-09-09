"use client";

import { useEffect, useRef } from "react";

export default function Topslider() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const animation = el.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      {
        duration: 30000,
        iterations: Infinity,
        easing: "linear",
      },
    );

    return () => {
      animation.cancel();
    };
  }, []);

  const text = "🔥 Premium Quality and Taste - All at its best";

  return (
    <div className="hidden md:block w-full overflow-hidden whitespace-nowrap bg-black py-[10px] text-white ">
      <div
        ref={ref}
        className="flex w-max text-[15px] font-normal will-change-transform"
      >
        {/* First set */}
        <div className="flex shrink-0">
          <span className="mr-5">{text}</span>
          <span className="mr-5">{text}</span>
          <span className="mr-5">{text}</span>
          <span className="mr-5">{text}</span>
          <span className="mr-5">{text}</span>
        </div>

        {/* Duplicate set */}
        <div className="flex shrink-0" aria-hidden="true">
          <span className="mr-5">{text}</span>
          <span className="mr-5">{text}</span>
          <span className="mr-5">{text}</span>
          <span className="mr-5">{text}</span>
          <span className="mr-5">{text}</span>
        </div>
      </div>
    </div>
  );
}
