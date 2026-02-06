# PassXGlobal

Production-ready Next.js application replacing the WordPress site for PassXGlobal — an immigration and overseas consultancy business.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown (source of truth)
- **Hosting:** Vercel-ready

## Folder Structure

```
passxglobal/
├── content/
│   └── pages/           # Markdown files (one per page)
├── src/
│   ├── app/
│   │   ├── api/         # API routes (form submissions)
│   │   ├── [[...slug]]/ # Dynamic page routing
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/      # Reusable UI components
│   │   ├── Hero.tsx
│   │   ├── ContentBlock.tsx
│   │   ├── CTA.tsx
│   │   ├── FAQ.tsx
│   │   ├── Testimonials.tsx
│   │   ├── LeadForm.tsx
│   │   ├── PageSections.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── lib/
│       ├── config.ts    # Site config (ISR interval, etc.)
│       ├── content.ts   # Markdown parsing & page loading
│       └── types.ts    # Shared TypeScript types
└── public/
```

## Data Flow

1. **Content:** Markdown files in `content/pages/` define page structure (frontmatter + body).
2. **Parsing:** `src/lib/content.ts` reads Markdown, parses frontmatter, converts body to HTML.
3. **Rendering:** Pages fetch content via `getPageBySlug()`, compose sections from components.
4. **Forms:** Lead forms POST to `/api/lead`; API validates and triggers placeholder email logic.

## Rendering Strategy

- **ISR:** All pages use Incremental Static Regeneration (revalidate: 3600s).
- **SSR:** Only API routes run on the server per request.
- **Static:** Pages are CDN-cached for fast delivery.

## Adding Pages

1. Create `content/pages/{slug}.md` with frontmatter: `slug`, `title`, `metaTitle`, `metaDescription`.
2. Optionally add `hero` and `sections` (content, cta, faq, testimonials).
3. URL will be `/{slug}` (e.g. `/services`).

## CMS Readiness

The content layer (`src/lib/content.ts`) is designed to be swapped for a CMS (Strapi, Payload, Directus) without changing page components or routing. Types in `src/lib/types.ts` define the contract.

## Scripts

- `npm run dev` — Development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
