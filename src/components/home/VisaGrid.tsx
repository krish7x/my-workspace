import Link from "next/link";
import type { HomeData } from "@/lib/home";

interface VisaGridProps {
  data: HomeData["visasWeOffer"];
}

export function VisaGrid({ data }: VisaGridProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          {data.heading}
        </h2>
        <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
          {data.subheading}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.countries.map((country) => (
            <div
              key={country.name}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                {country.name}
              </h3>
              <ul className="space-y-2">
                {country.visas.map((visa) => (
                  <li key={visa.label}>
                    {visa.href ? (
                      <Link
                        href={visa.href}
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {visa.label}
                      </Link>
                    ) : (
                      <span className="text-slate-600">{visa.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
