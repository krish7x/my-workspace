import { getHomeData } from "@/lib/home";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";

interface PolicyPageLayoutProps {
  title: string;
  children: React.ReactNode;
  showTestimonials?: boolean;
}

const CONTAINER_CLASS =
  "container mx-auto px-4 max-w-6xl pt-12 md:pt-16 pb-12 md:pb-16";
const ARTICLE_CLASS = "space-y-8";
const TITLE_CLASS =
  "text-3xl md:text-4xl font-bold text-slate-900 mb-8";
const PARAGRAPH_CLASS = "text-slate-800 leading-relaxed";

export function PolicyPageLayout({
  title,
  children,
  showTestimonials = true,
}: PolicyPageLayoutProps) {
  const homeData = showTestimonials ? getHomeData() : null;

  return (
    <>
      <div className={CONTAINER_CLASS}>
        <article className={ARTICLE_CLASS}>
          <header>
            <h1 className={TITLE_CLASS}>{title}</h1>
          </header>
          {children}
        </article>
      </div>
      {showTestimonials && homeData && (
        <HomeTestimonials data={homeData.testimonials} />
      )}
    </>
  );
}

export { PARAGRAPH_CLASS };
