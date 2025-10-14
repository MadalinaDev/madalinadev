"use client";
import { forwardRef } from "react";

export const experienceData = [
  {
    company: "Admin Tools",
    location: "Chisinau, Moldova",
    role: "Software Developer",
    duration: "Jan 2025 - June 2025",
    description: [
      "Developed an AI-powered cloud management platform that helps businesses optimize their cloud infrastructure.",
      "Designed and built full-stack features with strong user experience.",
      "Designed scalable API architecture and database schemas, and integrated automation tools.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "tRPC",
      "Tailwind CSS",
      "ShadCN",
      "Clerk",
      "Stripe",
      "Supabase",
      "Vercel",
    ],
  },
  {
    company: "nowtec solutions AG",
    location: "Chisinau, Moldova",
    role: "Software Engineer",
    duration: "Aug 2024 - Dec 2024",
    description: [
      "Designed and implemented scalable software solutions using modern technologies to enhance performance and user experience.",
      "Collaborated on feature development, resolved technical challenges, and delivered high-quality, maintainable code.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Strapi",
      "Tailwind CSS",
      "Ant Design",
      "Stripe",
    ],
  },
  {
    company: "HelpShelter",
    location: "Chisinau, Moldova",
    role: "Frontend Developer",
    duration: "May 2023 - July 2024",
    description: [
      "Developed a responsive frontend for an animal shelters platform using Vue.js and Figma.",
      "Collaborated with a team of 4 to integrate with backend functionality and ensure high-performance design and strong user experience.",
    ],
    techStack: [
      "Vue.js",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "REST API",
      "Axios",
      "Redux",
    ],
  },
];

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="w-full px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-foreground mb-10 text-xl font-bold text-balance md:text-3xl">
          Experience
        </h2>

        <div className="relative">
          <div className="from-muted/80 via-muted to-muted/80 absolute top-0 bottom-0 left-0 hidden w-[2px] bg-gradient-to-b md:block" />

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                <div className="absolute top-2 left-0 z-10 -translate-x-[7px] md:-translate-x-[11px]">
                  <div className="bg-foreground/20 animate-pulse-slow absolute inset-0 h-5 w-5 rounded-full md:h-6 md:w-6" />
                  <div className="bg-background border-foreground/40 animate-color-shift absolute inset-[3px] h-[14px] w-[14px] rounded-full border-2 md:inset-[4px] md:h-4 md:w-4" />
                  <div className="bg-foreground animate-color-shift-delayed absolute inset-[5.99999px] h-2 w-2 rounded-full md:inset-[8px]" />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-foreground text-lg font-semibold md:text-xl">
                        {experience.role}
                      </h3>
                      <span className="text-muted-foreground font-mono text-sm">
                        {experience.duration}
                      </span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2">
                      <span className="font-medium">{experience.company}</span>
                      <span className="text-muted-foreground/60">•</span>
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex gap-3 leading-relaxed"
                      >
                        <span className="text-foreground/40 mt-1.5 flex-shrink-0">
                          ▹
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-muted/50 text-foreground border-muted/30 hover:bg-muted/70 rounded-md border px-3 py-1 text-xs font-medium transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;
