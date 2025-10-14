"use client";
import { forwardRef } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { ExternalLinkIcon } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { Safari } from "../ui/safari";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const projects = [
    {
      id: "helpshelter",
      name: "Animal Shelters Platform",
      description:
        "A platform that connects donors and volunteers with verified animal shelters worldwide. It provides detailed information about each shelter, including donation methods, contact info, and social media links, helping users support animal well-being transparently.",
      techStack: ["Vue.js", "CSS", "Vuetify", "Figma", "Node.js", "PostgreSQL"],
      features: [
        "Global directory of animal shelters with detailed profiles",
        "Search and filtering system for shelters by region, type, and size",
        "Direct donation links to official shelter accounts (no intermediary processing)",
        "Responsive and accessibility-focused design for all devices",
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
        "An AI-powered personal finances platform that transforms receipts into spending insights. Users can upload receipts from Republic of Moldova through photos, QR codes, URLs, or manual input. It automatically analyzes, organizes, and visualizes expense statistics to help users better manage their finances.",
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
      images: [
        {
          id: "1",
          src: "/receiptiq/landing.png",
        },
      ],
    },
  ];

  return (
    <div ref={ref} className="w-full">
      <h2 className="text-foreground mt-20 mb-10 text-xl font-bold text-balance md:text-3xl">
        Projects
      </h2>

      <div className="flex flex-col gap-y-8">
        {projects.map((p) => (
          <Card key={p.id} className="md:mx:40 mx-20">
            <CardContent className="flex flex-col gap-2">
              <Safari imageSrc={p.coverImage} url={p.websiteLink} />
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
                <div className="text-justify text-sm">{p.description}</div>
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
