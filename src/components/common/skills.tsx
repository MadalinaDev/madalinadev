"use client";
import { forwardRef } from "react";
import { IconCloud } from "../ui/icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  "react",
  "html5",
  "css",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "docker",
  "git",
  "github",
  "python",
  "strapi",
  "stripe",
  "figma",
  "shadcnui",
  "vuedotjs",
  "antdesign",
  "trpc",
  "cplusplus",
  "linux",
  "openai",
];

export const skillsData = {
  technicalExpertise: {
    frontendEngineering: {
      level: "Advanced",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "ShadCN",
        "Tailwind CSS",
        "Vue.js",
        "Ant Design",
        "JavaScript",
        "HTML/CSS",
        "Magic UI",
      ],
    },
    backendDevelopment: {
      level: "Intermediate",
      skills: [
        "tRPC",
        "Drizzle ORM",
        "PostgreSQL",
        "Docker",
        "Strapi",
        "Stripe",
        "Node.js",
        "Linux",
        "OpenAI",
      ],
    },
    programmingLanguages: [
      "TypeScript",
      "JavaScript",
      "C/C++",
      "SQL",
      "Python",
      "Pascal",
    ],
  },

  analyticalAndAlgorithmicSkills: [
    {
      name: "Data Structures & Algorithms",
      description:
        "proficient in fundamentals with 4+ years of focused study and continuous skill refinement",
    },
    {
      name: "Competitive programming",
      description: (
        <div>
          solved 600+ problems on Codeforces{" "}
          <a
            href="https://codeforces.com/profile/Senorita"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            (account)
          </a>{" "}
          and participated in 50+ online contests, with top 3% ranking in
          Moldova. LeetCode{" "}
          <a
            href="https://leetcode.com/u/pufulet-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            (account)
          </a>{" "}
        </div>
      ),
    },
    {
      name: "Problem-solving",
      description:
        "optimizations, debugging, troubleshooting complex technical issues, logical thinking and pattern recognition",
    },
  ],
};

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <section ref={ref} className="mx-auto max-w-5xl py-20">
      <h2 className="text-foreground mb-10 text-xl font-bold text-balance md:text-3xl">
        Skills
      </h2>

      <div className="space-y-16">
        {/* technical skills */}
        <div className="flex w-full flex-col items-center justify-center md:flex-row">
          <div className="flex flex-4 flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <h4 className="text-foreground text-lg font-medium">
                  Frontend Engineering
                </h4>
                <span className="text-muted-foreground bg-muted/30 border-muted/40 rounded border px-2 py-0.5 font-mono text-sm">
                  {skillsData.technicalExpertise.frontendEngineering.level}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.technicalExpertise.frontendEngineering.skills.map(
                  (skill, i) => (
                    <span
                      key={i}
                      className="bg-muted/50 text-foreground border-muted/30 hover:bg-muted/70 hover:border-foreground/20 rounded-md border px-3 py-1.5 text-sm font-medium transition-all"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <h4 className="text-foreground text-lg font-medium">
                  Backend Development
                </h4>
                <span className="text-muted-foreground bg-muted/30 border-muted/40 rounded border px-2 py-0.5 font-mono text-sm">
                  {skillsData.technicalExpertise.backendDevelopment.level}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.technicalExpertise.backendDevelopment.skills.map(
                  (skill, i) => (
                    <span
                      key={i}
                      className="bg-muted/50 text-foreground border-muted/30 hover:bg-muted/70 hover:border-foreground/20 rounded-md border px-3 py-1.5 text-sm font-medium transition-all"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-foreground text-lg font-medium">
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.technicalExpertise.programmingLanguages.map(
                  (lang, i) => (
                    <span
                      key={i}
                      className="bg-muted/50 text-foreground border-muted/30 hover:bg-muted/70 hover:border-foreground/20 rounded-md border px-3 py-1.5 text-sm font-medium transition-all"
                    >
                      {lang}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="flex-none">
            <IconCloud images={images} />
          </div>
        </div>

        {/* soft skills */}
        <div className="space-y-6">
          <div className="flex items-baseline gap-3 my-0 py-0">
            <h4 className="text-foreground mb-6 text-xl font-semibold">
              Algorithmic Skills & Achievements
            </h4>
            <span className="text-muted-foreground bg-muted/30 border-muted/40 rounded border px-2 py-0.5 font-mono text-sm">
              {skillsData.technicalExpertise.frontendEngineering.level}
            </span>
          </div>
          <div className="space-y-4">
            {skillsData.analyticalAndAlgorithmicSkills.map((skill, i) => (
              <div key={i} className="group flex gap-3">
                <div className="flex-1">
                  <h4 className="text-foreground text-lg font-medium">
                    {skill.name}
                  </h4>
                  <div className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
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

Skills.displayName = "Skills";

export default Skills;
