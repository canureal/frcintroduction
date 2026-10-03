'use client'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ref.current,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
        }
      );
    },
    { scope: ref, dependencies: [delay] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
