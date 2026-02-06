import Link from "next/link";
import type { HomeData } from "@/lib/home";

interface MigrateSectionProps {
  data: HomeData["migrate"];
}

export function MigrateSection({ data }: MigrateSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-slate-900">{data.headline}</h2>
        <p className="mt-4 text-slate-600">{data.subheadline}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {data.destinations.map((dest) => (
            <Link
              key={dest.label}
              href={dest.href}
              className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-900 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {dest.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
