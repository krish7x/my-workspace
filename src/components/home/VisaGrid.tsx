"use client";

import { useState } from "react";
import Link from "next/link";
import type { HomeData } from "@/lib/home";

interface VisaGridProps {
  data: HomeData["visasWeOffer"];
}

export function VisaGrid({ data }: VisaGridProps) {
  const [openCountry, setOpenCountry] = useState<string | null>(null);

  const handleToggle = (name: string) => {
    setOpenCountry((prev) => (prev === name ? null : name));
  };

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          {data.heading}
        </h2>
        <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
          {data.subheading}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.countries.map((country) => (
            <VisaCountryCard
              key={country.name}
              country={country}
              isOpen={openCountry === country.name}
              onToggle={() => handleToggle(country.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VisaCountryCard({
  country,
  isOpen,
  onToggle,
}: {
  country: HomeData["visasWeOffer"]["countries"][0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-200 hover:shadow-md h-fit">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-bold text-slate-900">{country.name}</h3>
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="space-y-2 border-t border-slate-100 pt-4">
          {country.visas.map((visa) => (
            <li key={visa.label}>
              {visa.href ? (
                <Link
                  href={visa.href}
                  className="block text-slate-600 hover:text-blue-600 transition-colors py-1"
                >
                  {visa.label}
                </Link>
              ) : (
                <span className="block text-slate-600 py-1">{visa.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
