import Link from "next/link";
import { Trophy, ShieldCheck, Award, UserCheck } from "lucide-react";
import type { HomeData } from "@/lib/home";

interface WhyChoosePassXProps {
  data: HomeData["whyChoose"];
}

export function WhyChoosePassX({ data }: WhyChoosePassXProps) {
  const icons = [Trophy, ShieldCheck, Award, UserCheck];

  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          {data.heading}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.stats.map((stat, i) => {
            const Icon = icons[i] || Trophy; // Fallback to Trophy if index out of bounds

            return (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 p-4 bg-slate-800 rounded-2xl group-hover:bg-slate-700 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
                </div>

                {stat.label ? (
                  <>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-slate-300 font-medium">
                      {stat.label}
                    </p>
                  </>
                ) : (
                  <h3 className="text-lg font-bold text-white leading-snug max-w-[200px]">
                    {stat.value}
                  </h3>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href={data.readMoreHref}
            className="inline-flex px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-full hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
