# Lumina Dental Studio

Portfolio website for a fictional dental clinic in Austin, TX. Built with Vite, React, TypeScript and Tailwind CSS v4.

> **Frontend demonstration only.** Appointment requests are stored in your browser's local storage and are never sent anywhere. Dentists, testimonials and contact details are sample content.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the build
```

## Edit content

Everything lives in `src/data/site.ts`: clinic name, phone, WhatsApp, email, address, map links, hours, services, dentists, testimonials, FAQs and sample appointments. Update `siteUrl` there, plus the URLs in `public/sitemap.xml` and `public/robots.txt`, once you have a real domain.

## Routes

`/`, `/about`, `/dentists`, `/services`, `/services/<slug>` (9 treatments), `/testimonials`, `/faqs`, `/contact`, `/book-appointment`, `/admin` (demo appointment list, status filters and updates; hidden from search engines).

## Deploy to Vercel

```bash
npx vercel --prod
```

`vercel.json` rewrites clean URLs to the SPA. Or import the GitHub repo in the Vercel dashboard (framework preset: Vite).

## Notes

- Photos are from Unsplash (free license), resized and compressed in `public/images`.
- `screenshots/` holds full-page browser captures; `banner image.png` is the 1024 × 768 portfolio banner.
