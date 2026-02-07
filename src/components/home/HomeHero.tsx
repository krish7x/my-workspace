import Image from "next/image";
import Link from "next/link";
import type { HomeData } from "@/lib/home";

interface HomeHeroProps {
  data: HomeData["hero"];
}

export function HomeHero({ data }: HomeHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full">
            <Image
              src="/images/home-hero.png"
              alt="Hero Image"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {data.headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              {data.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {data.ctaButtons.map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  {btn.label}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href={data.primaryCta.href}
                className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-lg"
              >
                {data.primaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
