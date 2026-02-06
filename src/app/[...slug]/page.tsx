import { notFound } from "next/navigation";
import { getPageBySlug, getAllPageSlugs } from "@/lib/content";
import { Hero } from "@/components/Hero";
import { PageSections } from "@/components/PageSections";
import { LeadForm } from "@/components/LeadForm";
/** ISR revalidation: 1 hour. See src/lib/config.ts */
export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs
    .filter((s) => s !== "home")
    .map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const pageSlug = slug.join("/");
  const page = await getPageBySlug(pageSlug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const pageSlug = slug.join("/");
  const page = await getPageBySlug(pageSlug);

  if (!page) notFound();

  return (
    <>
      {page.hero && <Hero data={page.hero} />}
      <PageSections sections={page.sections} />
      {page.body && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div
              className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600"
              dangerouslySetInnerHTML={{ __html: page.body }}
            />
          </div>
        </section>
      )}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Get Your Free Consultation
          </h2>
          <p className="mt-4 text-slate-600">
            Fill out the form below and our experts will get back to you within 24 hours.
          </p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
