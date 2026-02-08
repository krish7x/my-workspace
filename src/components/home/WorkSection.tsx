import type { HomeData } from "@/lib/home";
import Image from "next/image";
import Link from "next/link"; // Assuming buttons might be links, or just divs if no href provided in string array. 
// The data.items is string[], so they are just labels. I'll make them look like the design.

interface WorkSectionProps {
  data: HomeData["work"];
}

export function WorkSection({ data }: WorkSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col order-last lg:order-first">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {data.headline}
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-lg">
              {data.subheadline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
              {data.items.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center px-6 py-4 bg-white border border-slate-300 rounded-md shadow-sm hover:shadow-md hover:border-blue-600 transition-all cursor-pointer text-center"
                >
                  <span className="text-slate-700 font-medium group-hover:text-blue-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image with Accents */}
          <div className="relative">
            {/* Pink Accent - Top Left */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FF69B4] rounded-tl-3xl z-0"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>

            {/* Red Accent - Bottom Right */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FF3333] rounded-br-3xl z-0"
              style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <a href="https://wa.me/918939138886?text=How%20can%20I%20help%20you%20today%3F%0A%0AName%3A%0APhone%3A%0APreferred%20Country%3A%0A%0AOur%20experts%20will%20reach%20you%20shortly!%20Thanks%20for%20your%20patience.%0A%0ARegards%2C%0APassX%20Immigration" target="_blank" rel="noopener noreferrer" className="absolute inset-0 block">
                  <Image
                    src="/images/Home - Work.png"
                    alt="Work Abroad"
                    fill
                    className="object-cover"
                  />
                </a>

                {/* Overlay Text */}

              </div>
            </div>
          </div>
        </div>
      </div>

    </section >
  );
}
