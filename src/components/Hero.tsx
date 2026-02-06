import type { HeroData } from "@/lib/types";

interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="bg-slate-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {data.headline}
        </h1>
        {data.subheadline && (
          <p className="mt-4 text-lg text-slate-300">{data.subheadline}</p>
        )}
      </div>
    </section>
  );
}
