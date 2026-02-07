import Link from "next/link";
import Image from "next/image";
import type { HomeData } from "@/lib/home";

const ImageComponent = Image as any;

interface CoachingSectionProps {
  data: HomeData["coaching"];
}

export function CoachingSection({ data }: CoachingSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image with "Triangle Corners" Design */}
          <div className="relative p-8">
            {/* Green Accent Top-Left - Triangle */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#7ADC5C]  z-0"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)', borderTopLeftRadius: '2rem' }} />

            {/* Purple Accent Bottom-Right - Triangle */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#8B5CF6] z-0"
              style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)', borderBottomRightRadius: '2rem' }} />

            {/* Main Image Container */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <div className="relative aspect-[4/3] w-full">
                <ImageComponent
                  src="/images/Home - Coaching.png"
                  alt="Coaching"
                  fill
                  className="object-cover"
                />

              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              {data.headline}
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {data.subheadline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-6 py-4 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-md transition-all text-center flex items-center justify-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
