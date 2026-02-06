import type { TestimonialData } from "@/lib/types";

interface TestimonialsProps {
  data: TestimonialData[];
}

export function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-900 mb-8">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {data.map((testimonial, index) => (
            <blockquote
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-slate-100"
            >
              <p className="text-slate-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic font-medium text-slate-900">
                  {testimonial.author}
                </cite>
                {testimonial.role && (
                  <span className="block text-sm text-slate-500">
                    {testimonial.role}
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
