/**
 * Content types for PassXGlobal.
 * CMS-ready: these interfaces can be swapped for Strapi/Payload/Directus later.
 */

export interface PageFrontmatter {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero?: HeroData;
  sections?: SectionData[];
}

export interface HeroData {
  headline: string;
  subheadline?: string;
}

export type SectionType = "content" | "cta" | "faq" | "testimonials";

export interface SectionData {
  type: SectionType;
  content?: ContentBlockData;
  cta?: CTAData;
  faq?: FAQData;
  testimonials?: TestimonialData[];
}

export interface ContentBlockData {
  heading?: string;
  body: string;
}

export interface CTAData {
  heading: string;
  description?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  heading?: string;
  items: FAQItem[];
}

export interface TestimonialData {
  quote: string;
  author: string;
  role?: string;
}
