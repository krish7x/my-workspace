"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { HomeData } from "@/lib/home";

interface HomeHeroProps {
  data: HomeData["hero"];
}

const MotionLink = motion.create(Link);

const buttonVariants: Variants = {
  initial: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function HomeHero({ data }: HomeHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full">
            <a href="https://wa.me/918939138886?text=How%20can%20I%20help%20you%20today%3F%0A%0AName%3A%0APhone%3A%0APreferred%20Country%3A%0A%0AOur%20experts%20will%20reach%20you%20shortly!%20Thanks%20for%20your%20patience.%0A%0ARegards%2C%0APassX%20Immigration" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/home-hero.png"
                alt="Hero Image"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </a>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {data.headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              {data.subheadline}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-md md:flex md:flex-wrap md:max-w-none md:gap-4 content-start">
              {data.ctaButtons.map((btn) => (
                <MotionLink
                  key={btn.label}
                  href={btn.href}
                  className="px-4 py-3 md:px-6 md:py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-center flex items-center justify-center"
                  initial="initial"
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  {btn.label}
                </MotionLink>
              ))}
              <div className="col-span-2 mt-2 md:w-full md:mt-6 md:block">
                <MotionLink
                  href={data.primaryCta.href}
                  className="w-full flex items-center justify-center px-8 py-4 md:inline-flex md:w-auto bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-lg"
                  initial="initial"
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  {data.primaryCta.label}
                </MotionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
