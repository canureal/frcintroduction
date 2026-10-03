'use client'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const cue = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        "[data-hero-item]",
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.15 }
      );

      gsap.to(cue.current, {
        opacity: 0,
        y: 8,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "18% top", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative min-h-svh w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-white/95 dark:bg-zinc-950/95 md:bg-white md:dark:bg-zinc-950 md:[clip-path:polygon(0_0,60%_0,45%_100%,0_100%)]" />

      <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" preserveAspectRatio="none">
        {/*abracadabra! */}
        <line
          x1="60%" y1="0" x2="45%" y2="100%"
          className="stroke-red-500"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-start justify-start gap-4 p-6 pt-28 sm:p-8 sm:pt-32 md:max-w-[40%] md:p-16 md:pt-48">
        <h1 data-hero-item className="text-4xl sm:text-5xl font-bold text-balance text-zinc-900 dark:text-white">Team <span className='stroke-red-500 text-red-500'>ALAZ</span></h1>
        <p data-hero-item className="text-md text-zinc-600 dark:text-zinc-200 text-base sm:text-md max-w-prose break-words">
          FRC(First Robotics Competition) Team at Sezai Karakoç anadolu lisesi
        </p>
        <div data-hero-item className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="/sponsor" className="w-full sm:w-auto">
            Be a Sponsor
          </Button>
          <Button href="#aboutus" variant="outline" className="w-full sm:w-auto">
            About Us
          </Button>
        </div>
      </div>

      <a
        ref={cue}
        href="#aboutus"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 inline-flex min-h-[44px] min-w-[44px] -translate-x-1/2 flex-col items-center justify-center gap-1 rounded-full bg-black/30 px-3 py-2 text-white backdrop-blur transition-colors hover:bg-black/50"
      >
        <span className="text-[11px] font-medium tracking-wide">Explore</span>
        <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
