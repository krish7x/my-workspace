import type { ContentBlockData } from "@/lib/types";

interface ContentBlockProps {
  data: ContentBlockData;
}

export function ContentBlock({ data }: ContentBlockProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {data.heading && (
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            {data.heading}
          </h2>
        )}
        <div
          className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600"
          dangerouslySetInnerHTML={{ __html: data.body }}
        />
      </div>
    </section>
  );
}
