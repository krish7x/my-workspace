import Link from "next/link";
import type { HomeData } from "@/lib/home";

interface GatewaySectionProps {
  data: HomeData["gateway"];
}

export function GatewaySection({ data }: GatewaySectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          {data.headline}
        </h2>
        <p className="mt-8 text-slate-600 leading-relaxed">{data.body}</p>
        <div className="mt-10 text-center">
          <Link
            href={data.ctaHref}
            className="inline-flex px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
