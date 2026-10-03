'use client'

import { useEffect, useState } from "react";
import ReactLenis from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <ReactLenis
      root
      autoRaf
      options={{
        lerp: 0.1,
        smoothWheel: !reducedMotion,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
