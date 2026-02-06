import Link from "next/link";
import Image from "next/image";
import type { HomeData } from "@/lib/home";

interface StudySectionProps {
  data: HomeData["study"];
}

export function StudySection({ data }: StudySectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image with Frame */}
          <div className="relative p-6">
            {/* Lime Green Accent Top-Left */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#7ED957] -z-10 rounded-tl-3xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/home-study.png"
                alt="Study Abroad with PassX"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6">

              </div>
            </div>

            {/* Purple Accent Bottom-Right */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#8B5CF6] -z-10 rounded-br-3xl" />
          </div>

          {/* Right Column: Content */}
          <div className="text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {data.headline}
            </h2>
            <p className="text-lg text-slate-600">
              {data.subheadline}
            </p>

            <div className="space-y-4 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.links.slice(0, 2).map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex justify-center items-center px-6 py-4 bg-white border border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors shadow-sm text-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {data.links[2] && (
                <Link
                  href={data.links[2].href}
                  className="flex justify-center items-center px-6 py-4 bg-white border border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors w-full text-center shadow-sm"
                >
                  {data.links[2].label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
