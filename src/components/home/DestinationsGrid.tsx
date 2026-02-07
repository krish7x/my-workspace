"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { HomeData } from "@/lib/home";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DestinationsGridProps {
  data: HomeData["destinations"];
}

export function DestinationsGrid({ data }: DestinationsGridProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="py-12 md:py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          {data.heading}
        </h2>

        {/* Carousel Container */}
        <div className="relative group px-4 -mx-4">
          <div className="overflow-hidden p-4 -m-4" ref={emblaRef}>
            <div className="flex -ml-4 py-8"> {/* Vertical padding for scale effect */}
              {data.items.map((dest, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4 min-w-0"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-md transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105 hover:z-20 bg-white group/card">
                    {/* Background Image */}
                    {dest.image ? (
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-200" />
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover/card:opacity-80" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
                      <h3 className="text-white text-2xl font-bold mb-2 group-hover/card:-translate-y-1 transition-transform duration-300">
                        {dest.name}
                      </h3>

                      <div className="space-y-1">
                        <p className="text-slate-200 text-sm opacity-0 h-0 group-hover/card:opacity-100 group-hover/card:h-auto transition-all duration-300 overflow-hidden">
                          Starting at
                        </p>
                        <p className="text-white font-bold text-lg">
                          {dest.price} <span className="text-sm font-normal text-slate-300">{dest.perPerson && "Per person"}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all focus:outline-none z-30 opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all focus:outline-none z-30 opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                ? "bg-slate-800 w-6"
                : "bg-slate-300 hover:bg-slate-400"
                }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
