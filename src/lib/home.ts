import fs from "fs";
import path from "path";

export interface HomeData {
  hero: {
    headline: string;
    subheadline: string;
    ctaButtons: { label: string; href: string }[];
    primaryCta: { label: string; href: string };
  };
  visasWeOffer: {
    heading: string;
    subheading: string;
    countries: {
      name: string;
      visas: { label: string; href?: string }[];
    }[];
  };
  expertConsulting: {
    headline: string;
    subheadline: string;
    buttons: { label: string; href: string }[];
  };
  migrate: {
    headline: string;
    subheadline: string;
    destinations: { label: string; href: string }[];
  };
  study: {
    headline: string;
    subheadline: string;
    links: { label: string; href: string }[];
  };
  work: {
    headline: string;
    subheadline: string;
    items: string[];
  };
  coaching: {
    headline: string;
    subheadline: string;
    links: { label: string; href: string }[];
  };
  destinations: {
    heading: string;
    items: { name: string; price: string; perPerson: boolean; image?: string }[];
  };
  whyChoose: {
    heading: string;
    stats: { value: string; label: string }[];
    readMoreHref: string;
  };
  gateway: {
    headline: string;
    body: string;
    ctaHref: string;
  };
  testimonials: {
    heading: string;
    items: { author: string; quote: string }[];
  };
}

const HOME_JSON_PATH = path.join(process.cwd(), "content", "home.json");

export function getHomeData(): HomeData {
  const raw = fs.readFileSync(HOME_JSON_PATH, "utf8");
  return JSON.parse(raw) as HomeData;
}
