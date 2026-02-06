You are a **senior full-stack engineer and architect**.

I want you to create a **production-ready Next.js application from scratch** to replace an existing WordPress website called **PassXGlobal**.

This is a **WordPress → Next.js migration**, not a greenfield marketing site.

The goal is:

1. **First**: accurately clone the site in terms of content, URLs, and SEO
2. **Later**: improve UI/UX, CMS integration, and conversions on top of this base

---

## 1️⃣ Website Overview

* Website name: **PassXGlobal**
* Current platform: **WordPress**
* Website type:

  * Immigration / overseas consultancy website
  * SEO-heavy
  * Lead-generation focused
* Primary business goal:

  * Capture leads via forms on almost every page
  * Trigger email communication on form submission

There is **no authentication**, no logged-in users, and no dashboard.

---

## 2️⃣ Core Tech Stack & Constraints

* Framework: **Next.js (App Router)**
* Hosting target: **Vercel**
* Language: **TypeScript**
* Styling: keep minimal, clean, and extensible (no design system yet)

### Rendering Strategy (VERY IMPORTANT)

* Default rendering: **ISR (Incremental Static Regeneration)**
* SSR should be used **ONLY** for:

  * API routes
  * Form submissions
* Do NOT SSR all pages
* Pages must be CDN-cached and fast

---

## 3️⃣ Content Source (WordPress REST API)

Content is extracted **offline** from WordPress using the REST API and then stored locally.

### WordPress API Base

```
https://passxglobal.com/wp-json/wp/v2
```

### Endpoints used for extraction

```
GET /pages?per_page=100
GET /posts?per_page=100
GET /media?per_page=100
```

### SEO Metadata

* SEO plugin may be Yoast or RankMath
* Meta title & meta description are preserved during extraction

---

## 4️⃣ Content Format (CRITICAL)

WordPress content is **NOT consumed at runtime**.

Instead:

* Content is converted into **Markdown files**
* Markdown is the **source of truth**
* One Markdown file = one page

### Markdown Frontmatter

Each page Markdown file contains:

* `slug`
* `title`
* `metaTitle`
* `metaDescription`

### Markdown Body

* Clean Markdown only
* Headings, paragraphs, lists, images
* No inline styles
* No WordPress shortcodes

---

## 5️⃣ Routing & SEO Rules

* URL structure must **exactly match WordPress slugs**
* No trailing slash changes
* No URL rewrites
* SEO metadata must be injected correctly per page
* Semantic HTML only
* SEO must be preserved 1:1

---

## 6️⃣ Page Rendering Rules

* Pages must be:

  * Generated from Markdown
  * Rendered using **ISR**
* Revalidation interval should be configurable
* Architecture must allow replacing Markdown with a CMS later **without refactoring page logic**

---

## 7️⃣ Layout & Component Architecture

* Use a **component-driven architecture**
* Pages should be composed from reusable sections such as:

  * Hero
  * Content blocks
  * CTA
  * FAQ
  * Testimonials
* Page content must NEVER be hardcoded
* Components should consume structured data, not raw HTML

Do NOT build a page builder.
Keep components opinionated and simple.

---

## 8️⃣ Forms & Lead Generation

* Almost every page contains a lead form
* Forms must:

  * Submit to **Next.js API routes**
  * Perform server-side validation
  * Trigger email communication (stub logic only)
* Email provider integration is NOT required yet
* Form logic must be fully decoupled from page rendering

---

## 9️⃣ API & Server Responsibilities

* Use Next.js API routes for:

  * Form submissions
* Server logic should:

  * Validate payload
  * Trigger placeholder email logic
  * Return success / error responses

Do NOT:

* Use SSR to handle form logic
* Mix form logic with page rendering

---

## 🔟 CMS Readiness (Future-proofing)

The architecture must support future integration with:

* Strapi
* Payload CMS
* Directus

WITHOUT:

* Rewriting page rendering
* Changing routing logic
* Breaking SEO

Markdown should be replaceable with CMS data later.

---

## 🚫 Explicitly Do NOT Do These

* Do NOT copy WordPress HTML
* Do NOT preserve Elementor / WPBakery layouts
* Do NOT add CMS SDKs now
* Do NOT implement authentication
* Do NOT implement SSR for all pages
* Do NOT overengineer

---

## ✅ What You SHOULD Focus On

* Clean folder structure
* Clear separation of concerns:

  * content
  * rendering
  * layout
  * server logic
* SEO correctness
* Performance best practices
* Long-term maintainability

---

## 📦 Output Expectations

* A clean, production-ready Next.js project
* App Router based routing
* Clear explanation of:

  * Folder structure
  * Data flow
  * Rendering decisions
* Ready for:

  * CMS integration
  * UI redesign
  * SEO scaling
  * Traffic growth

Think of this as a **long-term WordPress replacement**, not a quick clone.

---

## 🧠 Mental Model

This project should feel like:

* A modern, scalable, SEO-safe platform
* A clean foundation that grows with the business
* Something a senior team would confidently maintain for years

