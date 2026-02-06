import Link from "next/link";
import type { HomeData } from "@/lib/home";

interface ExpertConsultingProps {
  data: HomeData["expertConsulting"];
}

export function ExpertConsulting({ data }: ExpertConsultingProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          {data.headline}
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {data.buttons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
