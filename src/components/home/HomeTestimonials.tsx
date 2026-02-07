"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback } from "react";
import type { HomeData } from "@/lib/home";

interface HomeTestimonialsProps {
  data: HomeData["testimonials"];
}

export function HomeTestimonials({ data }: HomeTestimonialsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {data.heading}
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl">
              See what our clients have to say about their experience with PassX Global.
            </p>
          </div>

          <div className="flex gap-3 justify-center md:justify-end w-full md:w-auto">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden py-12 -my-12 px-2 -mx-2" ref={emblaRef}>
          <div className="flex -ml-6">
            {data.items.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
              >
                <blockquote className="h-full bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] transition-all duration-300 relative">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-blue-100 mb-4" />
                    <p className="text-slate-600 leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                  <footer className="mt-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <cite className="not-italic font-bold text-slate-900 block">
                        {item.author}
                      </cite>
                      <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Client</span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
