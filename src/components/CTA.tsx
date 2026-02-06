import type { CTAData } from "@/lib/types";
import { LeadForm } from "./LeadForm";

interface CTAProps {
  data: CTAData;
}

export function CTA({ data }: CTAProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          {data.heading}
        </h2>
        {data.description && (
          <p className="mt-4 text-slate-600">{data.description}</p>
        )}
        <div className="mt-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
