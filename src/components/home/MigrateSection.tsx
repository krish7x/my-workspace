import Link from "next/link";
import Image from "next/image";
import type { HomeData } from "@/lib/home";

interface MigrateSectionProps {
  data: HomeData["migrate"];
}

export function MigrateSection({ data }: MigrateSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="text-left space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {data.headline}
            </h2>
            <p className="text-lg text-slate-600">
              Immigration Made Simple with PassX Global –{" "}
              <span className="font-bold text-slate-900">Sign up today</span>
            </p>

            <div className="space-y-4 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.destinations.slice(0, 2).map((dest) => (
                  <Link
                    key={dest.label}
                    href={dest.href}
                    className="flex justify-center items-center px-6 py-4 bg-white border border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors shadow-sm text-center"
                  >
                    {dest.label}
                  </Link>
                ))}
              </div>
              {data.destinations[2] && (
                <Link
                  href={data.destinations[2].href}
                  className="flex justify-center items-center px-6 py-4 bg-white border border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors w-full text-center shadow-sm"
                >
                  {data.destinations[2].label}
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Image with Frame */}
          <div className="relative order-1 lg:order-2">
            {/* Orange Accent Top-Left */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 bg-[#E97424] rounded-tl-3xl z-0"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
            />

            {/* Cyan Accent Bottom-Right */}
            <div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#42E1E5] rounded-br-3xl z-0"
              style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
            />

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/home-migrate.png"
                  alt="Migrate with PassX"
                  fill
                  className="object-cover"
                />

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2 mb-1">
                    {/* Overlay content if needed, keeping empty as per original code's structure for now, but preserving the gradient look */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
