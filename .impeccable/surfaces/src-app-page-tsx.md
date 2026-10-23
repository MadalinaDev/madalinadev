---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/components/common/landingPage.tsx"]
---

# Home page (madalina.dev)

- Mode: Experience. The work is visible from the first viewport, but the entrance is about the person.
- Audience and job: anyone judging how good the developer is; they should leave convinced she is senior and highly skilled.
- Action: email (madalina.chirpicinic@gmail.com), reachable from the first viewport and the closing room.
- Proof on show: HelpShelter only (cover plus six screens, live link). The other five projects stay in code as comments; the CV/résumé link stays commented out and `public/resume.pdf` stays on disk (owner request, 2026-10-22).
- Room order (owner request, 2026-10-23): entrance with a HelpShelter strip, Experience, Work (HelpShelter in full), Skills, Enquiries. No classifier labels anywhere (levels, "Medium:", "Stack:"); the Freelance role is hidden in code.
- Constraints: keep the light/dark toggle working; Next.js 15, Tailwind v4, Radix dialog.
- Memorable moment: the walls blend from room to room as the visitor scrolls, the next room's colour rising from the bottom edge.
- Open: whether hidden projects return; restoring one means uncommenting its entry, its wall and highlights are already set.

## Direction contract

THESIS: The portfolio is an exhibition. Shipped work hangs in painted rooms with museum wall labels instead of cards, refusing the dark hero, card grid, timeline and skill-chip default.

OWN-WORLD: One paint program: vivid walls share one lightness and differ by hue (entrance indigo, Experience green, HelpShelter wine, Skills teal); vinyl lettering #f2f0e9; printed label cards #ebe8df with ink #1b1a17. Hanken Grotesk only, bold over light title pairs, tabular dates. Works hang flat with soft offset shadows. Daylight paints the same hues as soft tints.

STORY: The visitor meets the person and a strip of the work, reads the experience, walks into the Work room for the full piece, sees the skills, and leaves through Enquiries with the email.

FIRST VIEWPORT: "Madalina Chirpicinic" 64px bold top-left over the role statement in 28px light; the intro, email and city in the right column; nav top-right; below, the HelpShelter strip (cover plus three screens at one shared height) with its caption and a link to the Work room; the next room's colour rising at the bottom edge.

FORM: Painted Rooms, first on my ordered list of seven (the IMPECCABLE'S PICK card), chosen by the owner over the assigned roll; first viewport reworked by the owner on 2026-10-23. seed:1a554304111eac04. Signature interaction: the scroll-linked wall repaint.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
