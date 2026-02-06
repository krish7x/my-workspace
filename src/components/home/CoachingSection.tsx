import Link from "next/link";
import type { HomeData } from "@/lib/home";

interface CoachingSectionProps {
  data: HomeData["coaching"];
}

export function CoachingSection({ data }: CoachingSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-slate-900">{data.headline}</h2>
        <p className="mt-4 text-slate-600">{data.subheadline}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {data.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-5 py-2.5 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
