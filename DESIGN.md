---
name: madalina.dev
description: Portfolio of Madalina Chirpicinic, hung as an exhibition in painted rooms.
colors:
  entrance-indigo: "oklch(0.29 0.073 268)"
  chronology-green: "oklch(0.29 0.055 162)"
  work-wine: "oklch(0.29 0.078 12)"
  study-teal: "oklch(0.29 0.043 205)"
  entrance-indigo-daylight: "oklch(0.945 0.019 268)"
  chronology-green-daylight: "oklch(0.945 0.0143 162)"
  work-wine-daylight: "oklch(0.945 0.0203 12)"
  study-teal-daylight: "oklch(0.945 0.0112 205)"
  vinyl: "oklch(0.9547 0.0095 93.6)"
  daylight-ink: "oklch(0.24 0.028 268)"
  label-stock: "oklch(0.9308 0.0125 91.5)"
  label-stock-daylight: "oklch(0.99 0.003 91.5)"
  label-ink: "oklch(0.2178 0.0059 91.6)"
  print-white: "#ffffff"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.2vw, 4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  display-light:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 0.95rem + 1.1vw, 1.75rem)"
    fontWeight: 300
    lineHeight: 1.2
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.2vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"tnum\" on (dates only)"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  gutter-sm: "1.25rem"
  gutter-md: "2.5rem"
  gutter-lg: "5rem"
  column-gap: "3.75rem"
  room-y: "7rem"
  room-y-lg: "9rem"
  label-column: "22.5rem"
  content-max: "1440px"
components:
  wall-label:
    backgroundColor: "{colors.label-stock}"
    textColor: "{colors.label-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  wall-label-daylight:
    backgroundColor: "{colors.label-stock-daylight}"
    textColor: "{colors.label-ink}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  hung-work:
    backgroundColor: "{colors.print-white}"
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.vinyl}"
    typography: "{typography.label}"
  icon-button:
    textColor: "{colors.vinyl}"
    rounded: "{rounded.full}"
    size: "40px"
  enquiries-email:
    textColor: "{colors.vinyl}"
    typography: "{typography.display}"
---

# Design System: madalina.dev

## Overview

**Creative North Star: "Painted Rooms"**

The site is an exhibition. Each part of the page is a room with its own painted wall, shipped work hangs on those walls like prints, and the facts about a work sit on a museum label beside it, never on a card in a grid. Type is set directly on the wall like vinyl lettering. The entrance introduces the person and shows the work as a strip of prints; the rooms then run Experience, Work (the full hang, label, description and every screen), Skills and Enquiries.

Density is low and deliberate: generous wall space, short wall texts, one large work per room. The signature behaviour is the repaint: as the visitor scrolls, the wall blends from one room's paint to the next, and the screen shows that blend as a vertical wash, so the next room's colour rises from the bottom edge before the room arrives. There is no other choreography.

The world refuses the developer-portfolio default it replaced: no glowing near-black hero, no equal card grid with tech badges, no timeline widget, no skill chips, levels or icon clouds, no browser-chrome mockups, no monospace used as decoration.

**Key Characteristics:**
- One paint program: walls share a lightness and differ by hue, so contrast is the same in every room.
- Vivid jewel-toned walls in the evening (indigo, green, wine, teal); soft tints of the same hues in daylight.
- Works hang flat and square-cornered with a soft offset shadow.
- Lists speak for themselves: no level tags or field prefixes.
- One typeface, Hanken Grotesk, in bold-over-light title pairs.

## Colors

Deep, saturated historic-paint walls with warm off-white lettering; colour owns whole rooms rather than accents.

### Primary
- **Entrance Indigo** (`entrance-indigo`): the entrance and the Enquiries room; the first and last wall, and the live wall's starting paint before scripts run.

### Secondary
- **Chronology Green** (`chronology-green`): the Experience room, close to the sRGB limit for this lightness.
- **Work Wine** (`work-wine`): HelpShelter's room. Every project carries its own wall in `projectsData.ts`; wine is this one's.

### Tertiary
- **Study Teal** (`study-teal`): the Skills room.

### Neutral
- **Vinyl** (`vinyl`): all wall lettering in the evening theme. Secondary text is the same vinyl at 74% opacity over the wall (never a separate grey), about 7.3:1 on every wall; full vinyl is 12:1 or better.
- **Daylight Ink** (`daylight-ink`): wall lettering in daylight; in code its hue follows the room (`oklch(0.24 0.028 <room hue>)`), 14:1 on every daylight wall.
- **Label Stock** (`label-stock`, daylight `label-stock-daylight`): the printed wall label.
- **Label Ink** (`label-ink`): text on labels (about 14:1 on label stock).
- **Print White** (`print-white`): the backing behind hung screenshots while they load.
- **Daylight walls** (`*-daylight`): the same hues at lightness 0.945 with chroma scaled to 0.26.

### Named Rules
**The One Lightness Rule.** Every wall in a theme shares one lightness (evening 0.29, daylight 0.945); a room is defined only by its hue and chroma. New rooms add a `{ hue, chroma }` pair (to `walls` in `src/lib/rooms.ts`, or a project's `wall`) and inherit contrast for free.

**The Gamut Rule.** A wall's chroma stays inside sRGB at the shared lightness, at roughly 85% of the limit. Check before adding a room; a clipped colour is a defect, not a choice.

**The No Mud Rule.** Wall blends never pass through olive or khaki (hues 60–140), which read as mud at this lightness; the repaint takes the long way round the hue circle instead.

**The No Grey Rule.** Secondary text is the foreground at reduced opacity over its own wall, so it always carries the room's hue.

## Typography

**Display Font:** Hanken Grotesk (with ui-sans-serif, system-ui)
**Body Font:** Hanken Grotesk
**Label Font:** Hanken Grotesk

**Character:** A single clean grotesk used the way museums set exhibition vinyl: confident bold titles paired with light subtitles, quiet labels, and wall text a step larger than body copy.

### Hierarchy
- **Display** (700, clamp 2.5rem→4rem, line-height 1, -0.03em): the name at the entrance, and the email address in the Enquiries room.
- **Display Light** (300, clamp 1.25rem→1.75rem, 1.2): the line under a display or room name: the role statement at the entrance, "2+ years building software", "Open for challenges.".
- **Headline** (700, clamp 2.25rem→3rem, 1.05, -0.025em): room names (Experience, Work, Skills, Enquiries).
- **Title** (700, 1.5rem, -0.025em): a work's title on its label; chronology roles use 600.
- **Lede** (400, clamp 1.25rem→1.5rem, 1.3): wall text: project descriptions, skill lists (set at 300) and achievements. Keep it to 46–48ch.
- **Body** (400, 1rem, 1.625): chronology descriptions, at most 62ch.
- **Label** (400, 0.9375rem, 1.5): label lines, captions, the intro, metadata, the nav. Dates use tabular figures.

### Named Rules
**The Bold Over Light Rule.** Every room opens with a bold name and an optional light line beneath it; never the other way round, and never a small label above the name.

**The No Prefix Rule.** Lists and facts carry no classifier: no skill levels, no "Medium:" or "Stack:" prefixes. A list of technologies under a role or a work is understood as its stack.

## Layout

Content sits in a 1440px container with 1.25rem / 2.5rem / 5rem gutters (phone / tablet / desktop from 1280px). Walls are always full-bleed.

The entrance fills the first screen from 768px. From 1280px the name and role statement sit left with a 22.5rem column on the right for the intro, the email and the city, bottom-aligned with the role statement; below runs the work strip: the cover and three highlighted screens in one row, their column widths proportional to each print's aspect ratio so all four share a height. Below 1280px the strip becomes a horizontal snap-scroll row that keeps the page gutter.

The Work room hangs the cover on the left at roughly 60% width with the label in the 22.5rem column, then the description and key features, then all screens on a study wall (two, three or six columns). Rooms are separated by space, not rules: 7rem vertical padding (9rem from 768px), with more space above a room name than below it. The chronology is a three-column list from 1280px (dates 13rem, role and description, technologies in the 22.5rem column) and two columns from 768px.

Links to rooms are plain anchors with a 4rem scroll margin for the sticky header.

## Elevation & Depth

Flat walls, lifted works. Depth exists only where a physical object would cast a shadow: a hung screenshot and, in daylight, a label card. Everything else, including text, sits flat on the wall.

### Shadow Vocabulary
- **Hung work, evening** (`box-shadow: 0 30px 60px -20px oklch(0 0 0 / 0.6), 0 8px 16px oklch(0 0 0 / 0.35)`): every hung screenshot and print on evening walls.
- **Hung work, daylight** (`box-shadow: 0 34px 60px -30px oklch(0.25 0.03 <room hue> / 0.5), 0 8px 18px -8px oklch(0.25 0.03 <room hue> / 0.22)`): the same on pale walls, tinted by the room.
- **Label, daylight** (`box-shadow: 0 1px 2px oklch(0.25 0.03 <room hue> / 0.12), 0 14px 30px -20px oklch(0.25 0.03 <room hue> / 0.4)`): a printed label standing off a pale wall. In the evening the label only gets a 1px contact shadow.

### Named Rules
**The Cast Shadow Rule.** Shadows always have a downward offset and a soft blur, because they come from gallery lighting above. No zero-offset halos, no glows, no hard offset blocks.

## Shapes

Square-cut. Hung works, strip prints, study-wall prints and labels have no corner radius; they are rectangles of paper and screen. The only rounded shapes are the 40px circular icon buttons (theme switch, viewer controls). Thin rules (vinyl at 20%) separate chronology entries and close the Skills and footer sections.

## Components

### Live wall
A fixed wash behind the page, painted as a vertical gradient (in OKLab) from the paint at the top of the screen through the middle to the bottom. Each room's paint blends into the next across about two thirds of a screen around their boundary, recomputed every scroll frame; the three wall colours are registered `<color>` properties easing over 0.35s. Without scripts every room simply shows its own flat wall. The sticky header is painted with the top colour so it never shows a seam.

### Entrance strip
The work's first appearance: the cover and its highlighted screens hung in one row, each a button that opens the viewing room at that screen, followed by a caption line: title (semibold), kind (muted), "View six screens" and "Project details" with a down arrow linking to the Work room.

### Hung work
The focal object of the Work room: a screenshot hung large and square-cornered on print white with the hung-work shadow. Tall full-page captures hang cropped to a 16:10 window from the top. The whole work is a button that opens the viewing room; on hover or focus a small label-stock tag reads "View six screens".

### Wall label
- **Style:** label stock, label ink, 20px 24px padding, no radius.
- **Content, in order:** title (Title role), kind line, the technologies as a plain list, then "N screens · live at domain" with an external-link arrow and an optional "Source" link.
- **States:** links are underlined at 1px and thicken to 2px on hover; focus shows a 2px current-colour outline.

### Viewing room
A full-screen dialog painted in the work's own wall colour. Header: title, caption with "n of N" in tabular figures, live-site link, previous / next / close icon buttons. Body: a thumbnail rail from 1024px and the screen itself in a scrollable frame up to 70rem wide, so full-page captures read at real size. Arrow keys change screens; focus moves into the frame on open and returns to the opener on close.

### Navigation
A sticky bar painted with the live wall's top colour. Right: four anchors in page order (Experience, Work, Skills, Enquiries) in the Label role, underlining on hover, and the circular theme switch. Left, from 768px: the name fades in once the entrance title has scrolled away. On phones the four links and the switch fit one row; there is no menu drawer.

### Text links
Underlined at 1px with a 0.22em offset, 2px on hover. External links carry a 14–20px arrow-up-right icon and a visually hidden "(opens in a new tab)".

### Brand mark
The favicon is a lowercase "m" outlined from Hanken Grotesk Bold, in vinyl on a square-cut tile painted with the wall blend, entrance indigo into Work wine (`src/app/icon.svg`; `favicon.ico` and `apple-icon.png` are rendered from it). The share card (`src/app/opengraph-image.png`, 1200×630) uses the same wash with the name, the role line and the featured work hung as a print with its label.

### Enquiries
The entrance shows the email at up to 1.5rem semibold with the city beneath. The Enquiries room repeats the email at display size as the page's closing action, followed by profile links and "Based in Chișinău, Moldova."; the footer reads "© year Madalina Chirpicinic" and "Built with Next.js.".

## Do's and Don'ts

### Do:
- **Do** give every new room or project a `{ hue, chroma }` wall and let the paint program supply lightness and contrast.
- **Do** put a work's facts on its wall label, in label order: title, kind, technologies, screens and live link.
- **Do** hang screenshots square-cornered with the hung-work shadow, and let tall captures open full-length in the viewing room.
- **Do** keep wall text short (46–48ch) and set dates in tabular figures.
- **Do** keep the scroll-linked repaint as the page's single authored motion, and switch its easing off under reduced motion.

### Don't:
- **Don't** put project information in card grids or badge rows; one label per work.
- **Don't** add skill levels or field prefixes such as "Advanced", "Intermediate", "Medium:" or "Stack:".
- **Don't** frame screenshots in browser or device chrome.
- **Don't** add section entrance animations, cursor effects, glows or gradient text.
- **Don't** set labels, dates or metadata in monospace.
- **Don't** add a small uppercase label above a heading; the heading speaks for itself.
- **Don't** round the corners of hung works or labels.
