import type { HomeData } from "@/lib/home";

interface WorkSectionProps {
  data: HomeData["work"];
}

export function WorkSection({ data }: WorkSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-slate-900">{data.headline}</h2>
        <p className="mt-4 text-slate-600">{data.subheadline}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {data.items.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
