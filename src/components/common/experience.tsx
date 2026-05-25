"use client";
import { forwardRef } from "react";

export const experienceData = [
  {
    company: "Extensive Digital",
    location: "Chisinau, Moldova",
    role: "Software Developer",
    duration: "Feb 2026 - Present",
    description: [
      "Lead development of full-stack projects with a focus on e-commerce and sales. Solve clients' real problems and help them convert 10000+ active users into sales through highly UX-focused platforms, strong SEO integration, fast-loading interfaces and an innovative market presence.",
    ],
    techStack: [
      "PHP",
      "Laravel",
      "HTML/CSS",
      "NGinx",
      "Apache",
      "Linux",
      "CodeIgniter",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    role: "Software Developer",
    duration: "Jul 2025 - Jan 2026",
    description: [
      "Implemented full-stack platforms for individual clients — covering testing, debugging and performance optimization. Translated requirements into shipped deliverables under tight deadlines.",
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
      "Amazon S3",
      "Docker",
      "Redux",
    ],
  },
  {
    company: "Admin Tools",
    location: "Constanta, Romania",
    role: "Software Developer",
    duration: "Jan 2025 - Jun 2025",
    description: [
      "Worked with a team on an AI-powered cloud management platform. Built full-stack features with strong UX, designed scalable APIs and schemas, and integrated automation tools.",
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
      "Designed and implemented full-stack solutions for clients with a focus on performance and UX.",
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
];

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="w-full py-20">
      <div className="mx-auto w-full">
        <h2 className="text-foreground mb-10 text-xl font-bold text-balance md:text-3xl">
          Experience
        </h2>

        <div className="relative">
          {/* base line */}
          <div className="from-muted/30 via-muted to-muted/30 absolute top-0 bottom-0 left-0 hidden w-[2px] bg-gradient-to-b md:block" />
          {/* scanning highlight */}
          <div className="absolute top-0 bottom-0 left-0 hidden w-[2px] overflow-hidden md:block">
            <div className="animate-timeline-scan from-transparent via-foreground/25 to-transparent absolute h-1/3 w-full bg-gradient-to-b" />
          </div>

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

                  <div className="space-y-2">
                    {experience.description.map((item, i) => (
                      <div
                        key={i}
                        className="text-muted-foreground flex gap-3 leading-relaxed"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

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
