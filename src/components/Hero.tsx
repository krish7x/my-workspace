import type { HeroData } from "@/lib/types";

interface HeroProps {
  data: HeroData;
  backgroundImage?: string;
}

export function Hero({ data, backgroundImage }: HeroProps) {
  return (
    <section className="relative bg-slate-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={backgroundImage}
              alt={data.headline}
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-0" />
        </>
      )}

      <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {data.headline}
        </h1>
        {data.subheadline && (
          <p className="mt-4 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
            {data.subheadline}
          </p>
        )}
      </div>
    </section>
  );
}
