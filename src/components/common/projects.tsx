"use client";
import { forwardRef, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { ExternalLinkIcon, ZoomIn } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { Safari } from "../ui/safari";
import ImageGalleryDialog from "./imageGalleryDialog";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const projects = [
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
        "Created a global directory of animal shelters with detailed profiles",
        "Implemented search and filtering system for shelters by region, type, and size",
        "Added direct donation links to official shelter accounts (no intermediary processing)",
        "Integrated responsive and accessibility-focused design for all devices",
      ],
      githubLink: null,
      websiteLink: "https://help-shelter.com/",
      coverImage: "/helpshelter/cover.png",
      images: [
        {
          id: "1",
          src: "/helpshelter/landing.png",
        },
        {
          id: "2",
          src: "/helpshelter/shelters.png",
        },
        {
          id: "3",
          src: "/helpshelter/shelter.png",
        },
        {
          id: "4",
          src: "/helpshelter/about.png",
        },
        {
          id: "5",
          src: "/helpshelter/support.png",
        },
        {
          id: "6",
          src: "/helpshelter/getintouch.png",
        },
      ],
    },
    {
      id: "receiptiq",
      name: "Smart Personal Finance Manager",
      description:
        "An AI-powered personal finances platform that transforms receipts into spending insights and statistics. Users upload receipts from Republic of Moldova via QR codes / URLs / manual input. It automatically analyzes, organizes, and visualizes expense statistic.",
      techStack: [
        "React",
        "Typescript",
        "Next.js",
        "Tailwind CSS",
        "tRPC",
        "PostgreSQL",
        "Recharts",
        "Scrape.do",
        "Clerk",
      ],
      features: [
        "Implemented data scraping from mev.sfs.md for official receipts from Moldova",
        "Integrated AI-driven product categorization using OpenAI with automatic database updates",
        "Created interactive visual statistics using Recharts",
        "Added multiple upload options: QR scan, URL, or manual input",
        "Added secure user authentication with Clerk",
      ],
      githubLink:
        "https://github.com/MadalinaDev/T3__tax-receipts-financial-monitor",
      websiteLink: "https://besttaxscan.vercel.app/",
      coverImage: "/receiptiq/cover.png",
      images: [
        {
          id: "1",
          src: "/receiptiq/landing.png",
        },
        {
          id: "2",
          src: "/receiptiq/upload.png",
        },
        {
          id: "3",
          src: "/receiptiq/receipts.png",
        },
        {
          id: "4",
          src: "/receiptiq/receipt.png",
        },
        {
          id: "5",
          src: "/receiptiq/statistics.png",
        },
      ],
    },
  ];

  const [openGalleryId, setOpenGalleryId] = useState<string | null>(null);

  return (
    <div ref={ref} className="mx-auto max-w-5xl">
      <h2 className="text-foreground mt-20 mb-2 text-xl font-bold text-balance md:mb-6 md:text-3xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.id} className="">
            <CardContent className="flex flex-col gap-2">
              <div className="flex-1">
                <div className="items.center mb-4 flex flex-row items-center justify-between">
                  <div className="text-md font-semibold">{p.name}</div>
                  <div className="flex flex-row gap-x-2">
                    {/* public vs private github repository */}
                    {p.githubLink ? (
                      <Link
                        href={p.githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button variant="outline">
                          <LuGithub />
                        </Button>
                      </Link>
                    ) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline">
                            <LuGithub />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="center">
                          Private repository
                        </TooltipContent>
                      </Tooltip>
                    )}

                    {/* website link */}
                    <Link
                      href={p.websiteLink ?? ""}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline">
                        <ExternalLinkIcon />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div
                  className="group relative cursor-pointer"
                  onClick={() => setOpenGalleryId(p.id)}
                >
                  <Safari
                    key={"safari " + p.id}
                    imageSrc={p.coverImage}
                    url={p.websiteLink}
                    className="duration-200 hover:scale-102 hover:cursor-pointer"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 duration-400 group-hover:opacity-100">
                    <ZoomIn className="size-10 rounded-full bg-black/10 p-2 text-white/90" />
                  </div>
                </div>
                <ImageGalleryDialog
                  key={"gallery " + p.id}
                  open={openGalleryId === p.id}
                  onOpenChange={(open) => setOpenGalleryId(open ? p.id : null)}
                  images={p.images}
                  title={p.name}
                />

                <div className="my-3 min-h-25 text-justify text-sm">
                  {p.description}
                </div>
                <div className="my-3">
                  <div className="my-2 font-semibold">Tech Stack</div>
                  <div className="space-y-1 space-x-2">
                    {p.techStack.map((b) => (
                      <Badge key={b} variant="outline">
                        {b}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="my-2 font-semibold">Key Features</div>
                  <ul className="list-disc space-y-2 pl-4 text-sm">
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
