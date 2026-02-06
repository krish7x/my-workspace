import Link from "next/link";
import type { HomeData } from "@/lib/home";

interface HomeHeroProps {
  data: HomeData["hero"];
}

export function HomeHero({ data }: HomeHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight">
          {data.headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-100 text-center max-w-3xl mx-auto leading-relaxed">
          {data.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
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
        <div className="mt-6 text-center">
          <Link
            href={data.primaryCta.href}
            className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-lg"
          >
            {data.primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
