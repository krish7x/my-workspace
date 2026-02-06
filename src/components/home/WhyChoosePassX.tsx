import Link from "next/link";
import type { HomeData } from "@/lib/home";

interface WhyChoosePassXProps {
  data: HomeData["whyChoose"];
}

export function WhyChoosePassX({ data }: WhyChoosePassXProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {data.heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-6 text-center"
            >
              {stat.label ? (
                <>
                  <p className="text-2xl font-bold text-amber-400">{stat.value}</p>
                  <p className="mt-2 text-slate-300">{stat.label}</p>
                </>
              ) : (
                <p className="text-lg font-semibold text-white">{stat.value}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={data.readMoreHref}
            className="inline-flex px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
