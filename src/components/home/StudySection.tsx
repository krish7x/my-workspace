import Link from "next/link";
import Image from "next/image";
import type { HomeData } from "@/lib/home";

interface StudySectionProps {
  data: HomeData["study"];
}

export function StudySection({ data }: StudySectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image with Frame */}
          <div className="relative">
            {/* Lime Green Accent Top-Left */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 bg-[#7ED957] rounded-tl-3xl z-0"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
            />

            {/* Purple Accent Bottom-Right */}
            <div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#8B5CF6] rounded-br-3xl z-0"
              style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
            />

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <a href="https://wa.me/918939138886?text=How%20can%20I%20help%20you%20today%3F%0A%0AName%3A%0APhone%3A%0APreferred%20Country%3A%0A%0AOur%20experts%20will%20reach%20you%20shortly!%20Thanks%20for%20your%20patience.%0A%0ARegards%2C%0APassX%20Immigration" target="_blank" rel="noopener noreferrer" className="absolute inset-0 block">
                  <Image
                    src="/images/home-study.png"
                    alt="Study Abroad with PassX"
                    fill
                    className="object-cover"
                  />
                </a>

                {/* Overlay Text */}

              </div>
            </div>
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
