'use client'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function GiantAlaz() {
  const root = useRef<HTMLDivElement>(null);
  const word = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        word.current,
        { yPercent: 32 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom bottom", scrub: true },
        }
      );
    },
    { scope: root }
  );

  return (
    <div ref={root} aria-hidden="true" className='mx-auto w-full max-w-7xl select-none overflow-hidden px-4 sm:px-6 leading-none'>
      <p ref={word} className='text-center text-[22vw] sm:text-[20vw] md:text-[18vw] font-bold tracking-tighter text-red-500'>
          ALAZ
      </p>
    </div>
  );
}
