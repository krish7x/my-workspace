import type { HomeData } from "@/lib/home";

interface DestinationsGridProps {
  data: HomeData["destinations"];
}

export function DestinationsGrid({ data }: DestinationsGridProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          {data.heading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.items.map((dest) => (
            <div
              key={dest.name}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-slate-900">{dest.name}</h3>
              <p className="mt-2 text-slate-600 text-sm">
                Starting at {dest.price} per person
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
