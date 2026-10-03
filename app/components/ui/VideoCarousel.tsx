"use client";

import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function VideoCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!api) return;



    const playActive = () => {
      const active = api.selectedScrollSnap();
      videoRefs.current.forEach((video, i) => {
        if (!video) return;
        if (i === active) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    };

    playActive();
    api.on("select", playActive);
    return () => {
      api.off("select", playActive);
    };
  }, [api]);

  const videos = [
    { src: "/video1.mp4", poster: "/video1.jpg" },
    { src: "/video2.mp4", poster: "/video2.jpg" }
  ]

  return (
    <Carousel setApi={setApi} opts={{ loop: true }}>
      <CarouselContent>
        {videos.map((v, i) => (
          <CarouselItem key={v.src}>
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              src={v.src}
              poster={v.poster}
              muted
              playsInline
              loop
              controls
              preload="metadata"
              className="w-full rounded-xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
