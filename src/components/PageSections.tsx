import type { SectionData } from "@/lib/types";
import { Hero } from "./Hero";
import { ContentBlock } from "./ContentBlock";
import { CTA } from "./CTA";
import { FAQ } from "./FAQ";
import { Testimonials } from "./Testimonials";

interface PageSectionsProps {
  sections?: SectionData[];
}

export function PageSections({ sections }: PageSectionsProps) {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "content":
            return section.content ? (
              <ContentBlock key={index} data={section.content} />
            ) : null;
          case "cta":
            return section.cta ? <CTA key={index} data={section.cta} /> : null;
          case "faq":
            return section.faq ? <FAQ key={index} data={section.faq} /> : null;
          case "testimonials":
            return section.testimonials ? (
              <Testimonials key={index} data={section.testimonials} />
            ) : null;
          default:
            return null;
        }
      })}
    </>
  );
}
