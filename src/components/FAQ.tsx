"use client";

import { useState } from "react";
import type { FAQData } from "@/lib/types";

interface FAQProps {
  data: FAQData;
}

export function FAQ({ data }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {data.heading && (
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            {data.heading}
          </h2>
        )}
        <dl className="space-y-4">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 py-4 text-left font-medium text-slate-900 hover:bg-slate-50 transition-colors flex justify-between items-center"
                >
                  {item.question}
                  <span className="text-slate-400 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
              </dt>
              {openIndex === index && (
                <dd className="px-4 pb-4 text-slate-600 border-t border-slate-100">
                  {item.answer}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
