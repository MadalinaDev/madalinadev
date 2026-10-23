# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone who lands on madalina.dev: engineers, hiring teams, potential clients and peers, usually arriving from LinkedIn, GitHub, a resume or a shared link, on desktop or phone. The site is not tuned for one audience segment (confirmed by the owner). Their job is to judge, quickly, how good the developer behind the site is.

## Product Purpose

Personal portfolio of Madalina Chirpicinic, a full-stack software engineer. It presents shipped work, experience and skills. Success: a visitor leaves convinced the developer is senior and highly skilled, and the convinced ones send a message (email first).

## Positioning

The site is its own proof. The quality of the page itself (layout, typography, motion, performance, accessibility, detail) is the evidence for the claims it makes, and must hold up to an engineer's inspection. Beyond that, the claims are specific and real:

- Production websites live for Moldovan businesses: a car-rental booking platform (CrazyRent), an electrical-equipment e-commerce store (Bricomol), a food-brand catalogue with B2B ordering (Gustory).
- Own products: an AI receipt-scanning personal-finance app for Moldovan fiscal receipts (ReceiptIQ), an animal-shelter directory (Help Shelter), a tutoring site (Meditatii la Romana).
- Full-stack range across two ecosystems: PHP / Laravel / CodeIgniter / MySQL and TypeScript / Next.js / tRPC / PostgreSQL.
- Algorithmic background: 600+ Codeforces problems, 50+ contests, top 3% ranking in Moldova.

## Operating Context

A visitor skims the first screen and decides in seconds whether to keep reading; interested visitors open project screenshot galleries and the live sites, check experience, then reach out or download the resume. Based in Chisinau, Moldova; remote-friendly.

## Capabilities and Constraints

From the codebase:

- Next.js 15 (App Router), React 19, Tailwind CSS v4, shadcn/ui primitives on Radix (dialog, tooltip), framer-motion / motion, lucide and react-icons. Deployed as a static-rendered single page.
- One page, sections: introduction, projects, experience (4 roles), skills, contact. Each project has a cover, a screenshot gallery, live link, optional GitHub link, stack and features.
- Owner decision (2026-10-22): only HelpShelter is on show. The other five projects stay in `src/components/common/projectsData.ts` as comments, ready to restore. The CV/résumé link is commented out; `public/resume.pdf` is kept on disk (still reachable by its URL).
- Owner decision (2026-10-23): the Freelance (Jul 2025 – Jan 2026) role is hidden as a comment in `src/components/common/experience.tsx`; skill levels and "remote-friendly" are no longer shown.
- Light/dark theme toggle (next-themes, class strategy). Must keep working.
- T3 scaffolding (tRPC, Drizzle, Postgres) exists but the page does not use it.

## Brand Commitments

- Name: Madalina Chirpicinic. Domain and wordmark: madalina.dev.
- Voice: first person, concise, factual; no hype.

## Evidence on Hand

- Project screenshots: `public/crazyrent/`, `public/bricomol/`, `public/gustory/`, `public/helpshelter/`, `public/meditatii-romana/`, `public/receiptiq/` (full-page captures plus a cover per project). HelpShelter's were recaptured live on 2026-10-23 (home, directory, AOVA profile, about, support, home on a phone); its old `getintouch.png` is kept but unused, as the live site no longer has that page.
- Role line (proposed 2026-10-23 at the owner's request for something less generic; owner kept "Full-stack engineer"): "Full-stack engineer building online stores in Laravel and web apps in Next.js." Kept in `src/lib/site.ts` with the other identity facts.
- Live sites: new.crazyrent.md, bricomol.md, gustory.md, help-shelter.com, meditatii-romana.vercel.app, besttaxscan.vercel.app. Source: github.com/MadalinaDev/T3__tax-receipts-financial-monitor.
- Experience copy and stacks in `src/components/common/experience.tsx`; skills in `src/components/common/skills.tsx`.
- Contact: madalina.chirpicinic@gmail.com, linkedin.com/in/madalina-chirpicinic, github.com/MadalinaDev, codeforces.com/profile/Senorita. Resume: `public/resume.pdf` (not linked for now).
- Absent, never fabricate: testimonials, client quotes, client logos used as endorsements, traffic or revenue metrics beyond the "10000+ active users" stated in the Extensive Digital entry, and blog posts (the old metadata mentions a blog; none exists).

## Product Principles

1. The page is the portfolio's strongest exhibit: every detail should survive a senior engineer's inspection.
2. Shipped, verifiable work over adjectives: show the real sites and screens, link the live versions.
3. One obvious way to get in touch: email, reachable from anywhere on the page.
4. Respect the visitor's time: the gist in one screen, depth on demand.
5. Speed and accessibility are part of the craft, not an afterthought.
