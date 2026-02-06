/**
 * Content layer: Markdown parsing and page loading.
 * Replace this module with CMS fetch when migrating to Strapi/Payload/Directus.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { PageFrontmatter } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "pages");

export interface PageContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  body: string;
  hero?: PageFrontmatter["hero"];
  sections?: PageFrontmatter["sections"];
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown);
  return String(result);
}

async function parseSectionBodies(
  sections: PageFrontmatter["sections"]
): Promise<PageFrontmatter["sections"]> {
  if (!sections) return sections;

  const parsed = await Promise.all(
    sections.map(async (section) => {
      if (section.type === "content" && section.content?.body) {
        const html = await markdownToHtml(section.content.body);
        return { ...section, content: { ...section.content, body: html } };
      }
      return section;
    })
  );
  return parsed;
}

export async function getPageBySlug(slug: string): Promise<PageContent | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = data as PageFrontmatter;
  const body = await markdownToHtml(content);
  const sections = await parseSectionBodies(frontmatter.sections);

  return {
    slug: frontmatter.slug,
    title: frontmatter.title,
    metaTitle: frontmatter.metaTitle,
    metaDescription: frontmatter.metaDescription,
    body,
    hero: frontmatter.hero,
    sections,
  };
}

export async function getAllPageSlugs(): Promise<string[]> {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
