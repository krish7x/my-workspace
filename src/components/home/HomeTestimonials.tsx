import type { HomeData } from "@/lib/home";

interface HomeTestimonialsProps {
  data: HomeData["testimonials"];
}

export function HomeTestimonials({ data }: HomeTestimonialsProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          {data.heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {data.items.map((item) => (
            <blockquote
              key={item.author}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
            >
              <p className="text-slate-600 italic">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic font-bold text-slate-900">
                  {item.author}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
