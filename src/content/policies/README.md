# Policy Pages

Extensible policy/legal document system. Add new policies in three steps:

## Adding a New Policy

1. **Register in lib** – Add to `src/lib/policies.ts`:
   - Add slug to `PolicySlug` type
   - Add entry to `POLICY_REGISTRY` with metadata and pageTitle

2. **Create content** – Add `src/content/policies/YourPolicyContent.tsx`:
   - Use `PolicySection`, `PolicyLink`, `PolicyList`, `PARAGRAPH_CLASS`
   - Export the content component

3. **Create page** – Add `src/app/your-policy/page.tsx`:
   - Import `PolicyPageLayout`, your content, `getPolicyConfig`
   - Export metadata and render layout with content

4. **Update index** – Add export to `src/content/policies/index.ts`

## Components

- `PolicyPageLayout` – Wrapper with container, title, testimonials
- `PolicySection` – Section with optional heading
- `PolicyLink` – Styled inline link
- `PolicyList` – Ordered or unordered list
