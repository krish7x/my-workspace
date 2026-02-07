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
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          {data.heading}
        </h2>

        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {data.items.map((dest, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4 min-w-0"
                >
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group/card">
                    <div className="relative w-full aspect-[4/3] group-hover/card:aspect-[3/4] transition-[aspect-ratio] duration-500 ease-in-out bg-slate-100">
                      {dest.image ? (
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          className="object-cover object-top hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-200">
                          <span className="text-sm">No Image</span>
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-xl text-slate-900 mb-2">
                        {dest.name}
                      </h3>
                      <div className="mt-auto pt-2 border-t border-slate-100">
                        <p className="text-slate-500 text-sm mb-1">Starting at</p>
                        <p className="text-slate-900 font-bold">
                          {dest.price} {dest.perPerson && "Per person"}
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all focus:outline-none z-10 opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all focus:outline-none z-10 opacity-0 group-hover:opacity-100"
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
    </section >
  );
}
