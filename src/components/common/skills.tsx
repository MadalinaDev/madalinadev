"use client";
import { forwardRef } from "react";

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

  coreCompetencies: [
    {
      name: "Critical thinking",
      description:
        "Experience in strategic feature integration and efficient code refactoring.",
    },
    {
      name: "Team collaboration",
      description:
        "Effectively worked with teams of developers on 10+ projects.",
    },
    {
      name: "Continuous learning",
      description:
        "Proactive in acquiring new skills, technologies, and courses completion.",
    },
    {
      name: "Responsibility",
      description:
        "Effectively meeting deadlines and maintaining high-quality standards.",
    },
    {
      name: "Attention to detail",
      description: "Ensuring reviewed and production-ready code.",
    },
    {
      name: "Adaptability",
      description:
        "Quickly learning and adapting to new processes, tools, and technologies in dynamic environments.",
    },
  ],

  analyticalAndAlgorithmicSkills: [
    {
      name: "Data Structures & Algorithms",
      description:
        "Proficient in core topics with 4+ years of focused study and continuous skill refinement.",
    },
    {
      name: "Competitive programming",
      description:
        "Solved 600+ problems on Codeforces and LeetCode; participated in 50+ online contests.",
    },
    {
      name: "Problem-solving",
      description:
        "Optimizations, debugging, troubleshooting complex technical issues, logical thinking, and pattern recognition.",
    },
  ],
};

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="w-full px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-foreground mb-10 text-xl font-bold text-balance md:text-3xl">
          Skills
        </h2>

        <div className="space-y-16">
          <div className="space-y-8">

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

            <div className="space-y-4">
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

          <div className="space-y-6">
            <h4 className="text-foreground mb-6 text-xl font-semibold">
              Core Competencies
            </h4>
            <div className="bg-muted/30 border-muted/40 rounded-lg border p-6 w-full">
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                {skillsData.coreCompetencies.map((competency, i) => (
                  <div key={i} className="group flex gap-3">
                    <span className="text-foreground/40 mt-1 text-sm">•</span>
                    <div className="flex-1">
                      <h4 className="text-foreground group-hover:text-foreground/80 mb-1 text-base font-semibold transition-colors">
                        {competency.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {competency.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-foreground mb-6 text-xl font-semibold">
              Analytical & Algorithmic Skills
            </h4>
            <div className="bg-muted/30 border-muted/40 rounded-lg border p-6">
              <div className="space-y-4">
                {skillsData.analyticalAndAlgorithmicSkills.map((skill, i) => (
                  <div key={i} className="group flex gap-3">
                    <span className="text-foreground/40 mt-1 text-sm">•</span>
                    <div className="flex-1">
                      <h4 className="text-foreground group-hover:text-foreground/80 mb-1 text-base font-semibold transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
