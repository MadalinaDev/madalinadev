"use client";
import { forwardRef, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ExternalLinkIcon, ZoomIn } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { Safari } from "../ui/safari";
import ImageGalleryDialog from "./imageGalleryDialog";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const projects = [
    {
      id: "crazyrent",
      name: "CrazyRent - Car Rental Platform",
      description:
        "Booking platform for a car rental company in Chisinau. Customers browse a categorized fleet (Econom / Standard / Business / Lux), pick pickup/return dates with CASCO option, and reserve a vehicle - backed by a CMS-driven car catalogue, promotions and a Google reviews integration.",
      techStack: [
        "PHP",
        "Laravel",
        "HTML/CSS",
        "Nginx",
        "Opcache",
        "Linux",
        "CodeIgniter",
        "MySQL",
        "MongoDB",
      ],
      features: [
        "Date-range booking flow with insurance options",
        "Categorized fleet (Econom, Standard, Business, Lux) with detail pages",
        "Brand pages aggregating cars by manufacturer",
        "Promotions, discount badges and an FAQ knowledge base",
        "Multi-language (RO / RU) and SEO-optimized routing",
      ],
      githubLink: null,
      websiteLink: "https://new.crazyrent.md/",
      coverImage: "/crazyrent/cover.png",
      images: [
        { id: "1", src: "/crazyrent/image.png" },
        { id: "2", src: "/crazyrent/Screenshot_2.png" },
        { id: "3", src: "/crazyrent/screencapture-new-crazyrent-md-contacte-2026-05-26-00_01_17.png" },
        { id: "4", src: "/crazyrent/screencapture-new-crazyrent-md-news-2026-05-26-00_01_44.png" },
        { id: "5", src: "/crazyrent/screencapture-new-crazyrent-md-account-favorites-2026-05-26-00_02_14.png" },
        { id: "6", src: "/crazyrent/screencapture-new-crazyrent-md-car-rent-bmw-seria-7-g70-f54ba-2026-05-26-00_02_42.png" },
        { id: "7", src: "/crazyrent/screencapture-new-crazyrent-md-testimoniale-2026-05-26-00_03_24.png" },
      ],
    },
    {
      id: "bricomol",
      name: "Bricomol - Electrical E-Commerce",
      description:
        "Full e-commerce platform for an electrical equipment retailer in Moldova. Features a large product catalogue (LED profiles, lighting, relays, cable management), cart and checkout, brand pages, blog and customer account - optimized for SEO and conversion.",
      techStack: [
        "PHP",
        "Laravel",
        "HTML/CSS",
        "Nginx",
        "Opcache",
        "Linux",
        "CodeIgniter",
        "MySQL",
        "MongoDB",
      ],
      features: [
        "Multi-category product catalogue with search and filters",
        "Cart, wishlist, account and order flow",
        "Brand and category landing pages optimized for SEO",
        "Promotions, discount codes and special offers engine",
        "Editorial blog and content sections (RO / RU)",
      ],
      githubLink: null,
      websiteLink: "https://bricomol.md/",
      coverImage: "/bricomol/cover.png",
      images: [
        { id: "1", src: "/bricomol/screencapture-bricomol-md-2026-05-26-00_21_34.png" },
        { id: "2", src: "/bricomol/screencapture-bricomol-md-categorie-produs-sisteme-fotovoltaice-solare-invertore-accesorii-2026-05-26-00_22_21.png" },
        { id: "3", src: "/bricomol/screencapture-bricomol-md-produs-track-sina-magnetica-slim-22mm-incastrata-1m-p-u-proiectoare-magnetice-48v-negru-2026-05-26-00_23_39.png" },
        { id: "4", src: "/bricomol/screencapture-bricomol-md-cart-2026-05-26-00_24_00.png" },
      ],
    },
    {
      id: "gustory",
      name: "Gustory - Ready-to-Eat Food Brand",
      description:
        "Brand and product-catalogue website for Gustory, a Moldovan ready-to-eat food line. Showcases the full product range across categories (mains, soups, pastries, salads), brand story, store locator and B2B orders - with rich product imagery and a clean editorial design.",
      techStack: [
        "PHP",
        "Laravel",
        "HTML/CSS",
        "Nginx",
        "Opcache",
        "Linux",
        "CodeIgniter",
        "MySQL",
        "MongoDB",
      ],
      features: [
        "Filterable product catalogue with category navigation",
        "Branded story & values section with custom illustrations",
        "Store locator and B2B orders flow",
        "Multi-language support (RO / RU)",
        "CMS-driven content for product updates",
      ],
      githubLink: null,
      websiteLink: "https://gustory.md/",
      coverImage: "/gustory/cover.png",
      images: [
        { id: "1", src: "/gustory/screencapture-gustory-md-2026-05-26-00_04_31.png" },
        { id: "2", src: "/gustory/screencapture-gustory-md-our-history-2026-05-26-00_13_49.png" },
        { id: "3", src: "/gustory/screencapture-gustory-md-catalog-produse-2026-05-26-00_14_46.png" },
        { id: "4", src: "/gustory/screencapture-gustory-md-b2b-orders-2026-05-26-00_15_55.png" },
        { id: "5", src: "/gustory/screencapture-gustory-md-contacts-2026-05-26-00_15_37.png" },
        { id: "6", src: "/gustory/screencapture-gustory-md-product-bors-rosu-traditional-400g-2026-05-26-00_16_33.png" },
      ],
    },
    {
      id: "helpshelter",
      name: "Animal Shelters Platform",
      description:
        "A platform that connects donors and volunteers with verified animal shelters worldwide. It provides detailed information about each shelter, including donation methods, contact info, and social media links, helping users support animal well-being transparently.",
      techStack: [
        "Vue.js",
        "CSS",
        "Vuetify",
        "Figma",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      features: [
        "Global directory of animal shelters with detailed profiles",
        "Search and filtering by region, type and size",
        "Direct donation links to official shelter accounts",
        "Responsive, accessibility-focused design for all devices",
      ],
      githubLink: null,
      websiteLink: "https://help-shelter.com/",
      coverImage: "/helpshelter/cover.png",
      images: [
        { id: "1", src: "/helpshelter/landing.png" },
        { id: "2", src: "/helpshelter/shelters.png" },
        { id: "3", src: "/helpshelter/shelter.png" },
        { id: "4", src: "/helpshelter/about.png" },
        { id: "5", src: "/helpshelter/support.png" },
        { id: "6", src: "/helpshelter/getintouch.png" },
      ],
    },
    {
      id: "meditatii-romana",
      name: "Meditatii la Romana - Tutoring Platform",
      description:
        "Marketing and booking website for a Romanian language tutor in Nisporeni. Presents tutoring packages, exam prep tracks (Class 9 & Bacalaureat), diction courses and a lead-capture contact form - built with a fast, accessible Next.js stack and dark-mode support.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN",
        "Framer Motion",
        "Vercel",
      ],
      features: [
        "Service catalogue with packages and transparent pricing tiers",
        "Sections for individual lessons, exam prep and diction coaching",
        "Testimonials, FAQ and lead-capture contact form",
        "Fully responsive layout with dark/light theme",
      ],
      githubLink: null,
      websiteLink: "https://meditatii-romana.vercel.app/",
      coverImage: "/meditatii-romana/screencapture-meditatii-romana-vercel-app-2026-05-26-00_25_11.png",
      images: [
        { id: "1", src: "/meditatii-romana/screencapture-meditatii-romana-vercel-app-2026-05-26-00_25_11.png" },
      ],
    },
    {
      id: "receiptiq",
      name: "Smart Personal Finance Manager",
      description:
        "An AI-powered personal finances platform that transforms receipts into spending insights and statistics. Users upload receipts from Republic of Moldova via QR codes, URLs or manual input. It automatically analyzes, organizes and visualizes expense data.",
      techStack: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "tRPC",
        "PostgreSQL",
        "Recharts",
        "Scrape.do",
        "Clerk",
      ],
      features: [
        "Data scraping from mev.sfs.md for official receipts from Moldova",
        "AI-driven product categorization using OpenAI with automatic database updates",
        "Interactive visual statistics using Recharts",
        "Multiple upload options: QR scan, URL or manual input",
        "Secure user authentication with Clerk",
      ],
      githubLink:
        "https://github.com/MadalinaDev/T3__tax-receipts-financial-monitor",
      websiteLink: "https://besttaxscan.vercel.app/",
      coverImage: "/receiptiq/cover.png",
      images: [
        { id: "1", src: "/receiptiq/landing.png" },
        { id: "2", src: "/receiptiq/upload.png" },
        { id: "3", src: "/receiptiq/receipts.png" },
        { id: "4", src: "/receiptiq/receipt.png" },
        { id: "5", src: "/receiptiq/statistics.png" },
      ],
    },
  ];

  const [openGalleryId, setOpenGalleryId] = useState<string | null>(null);

  return (
    <div ref={ref} className="mx-auto w-full">
      <h2 className="text-foreground mt-20 mb-6 text-xl font-bold text-balance md:mb-8 md:text-3xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, idx) => (
          <Card
            key={p.id}
            className="group border-muted/40 bg-card/50 hover:border-muted-foreground/30 flex flex-col overflow-hidden border transition-all duration-300 hover:shadow-xl"
          >
            <CardContent className="flex h-full flex-col gap-4 p-5">
              <div
                className="group/img relative -mx-1 cursor-pointer overflow-hidden rounded-md"
                onClick={() => setOpenGalleryId(p.id)}
              >
                <Safari
                  key={"safari " + p.id}
                  imageSrc={p.coverImage}
                  url={p.websiteLink}
                  className="duration-300 group-hover/img:scale-[1.02]"
                  priority={idx < 2}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/img:bg-black/20 group-hover/img:opacity-100">
                  <ZoomIn className="size-10 rounded-full bg-black/40 p-2 text-white" />
                </div>
              </div>

              <ImageGalleryDialog
                key={"gallery " + p.id}
                open={openGalleryId === p.id}
                onOpenChange={(open) => setOpenGalleryId(open ? p.id : null)}
                images={p.images}
                title={p.name}
              />

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-foreground text-base leading-snug font-semibold md:text-lg">
                  {p.name}
                </h3>
                <div className="flex shrink-0 flex-row gap-2">
                  {p.githubLink && (
                    <Link href={p.githubLink} target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <LuGithub />
                      </Button>
                    </Link>
                  )}
                  <Link
                    href={p.websiteLink ?? ""}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <ExternalLinkIcon />
                    </Button>
                  </Link>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.description}
              </p>

              <div className="mt-auto space-y-4 pt-2">
                <div>
                  <div className="text-muted-foreground/70 mb-2 font-mono text-[11px] tracking-wider uppercase">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.techStack.map((b) => (
                      <Badge
                        key={b}
                        variant="outline"
                        className="bg-muted/40 border-muted/40 text-xs font-normal"
                      >
                        {b}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-muted-foreground/70 mb-2 font-mono text-[11px] tracking-wider uppercase">
                    Key Features
                  </div>
                  <ul className="text-muted-foreground list-disc space-y-1.5 pl-4 text-sm">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
