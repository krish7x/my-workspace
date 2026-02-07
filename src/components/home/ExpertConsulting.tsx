import Link from "next/link";
import Image from "next/image";
import type { HomeData } from "@/lib/home";

interface ExpertConsultingProps {
  data: HomeData["expertConsulting"];
}

export function ExpertConsulting({ data }: ExpertConsultingProps) {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image with Frame */}
          <div className="relative">
            {/* Purple Accent Top-Left */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 bg-[#A91D8E] rounded-tl-3xl z-0"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
            />

            {/* Blue Accent Bottom-Right */}
            <div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0090FF] rounded-br-3xl z-0"
              style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
            />

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/expert-consulting.png"
                  alt="Expert Consulting"
                  fill
                  className="object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {data.headline}
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              {data.subheadline}
            </p>

            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.buttons.slice(0, 2).map((btn) => (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className="flex justify-center items-center px-6 py-4 border border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-slate-900 hover:bg-slate-50 transition-all text-center shadow-sm"
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
              {data.buttons[2] && (
                <Link
                  href={data.buttons[2].href}
                  className="flex justify-center items-center px-6 py-4 border border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-slate-900 hover:bg-slate-50 transition-all w-full text-center shadow-sm"
                >
                  {data.buttons[2].label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
