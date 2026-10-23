import { roomStyle, walls } from "@/lib/rooms";

export const skillsData = {
  technicalExpertise: {
    frontendEngineering: {
      level: "Advanced",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Vue.js",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "ShadCN",
        "Magic UI",
        "Ant Design",
        "Bootstrap",
      ],
    },
    backendDevelopment: {
      level: "Intermediate",
      skills: [
        "PHP",
        "tRPC",
        "Drizzle ORM",
        "PostgreSQL",
        "Docker",
        "Stripe",
        "Linux",
        "Strapi",
        "OpenAI",
        "MongoDB",
        "Nginx",
        "Laravel",
        "CodeIgniter",
      ],
    },
    programmingLanguages: [
      "PHP",
      "TypeScript",
      "JavaScript",
      "C/C++",
      "SQL",
      "Python",
      "Pascal",
    ],
    aiTools: [
      "Figma MCP",
      "Claude",
      "GitHub Copilot",
      "v0",
      "Anthropic API",
      "AI chat integrations",
    ],
  },

  analyticalAndAlgorithmicSkills: [
    {
      name: "Competitive programming",
      description: (
        <>
          Solved 600+ problems on{" "}
          <a
            href="https://codeforces.com/profile/Senorita"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 hover:decoration-2"
          >
            Codeforces
            <span className="sr-only"> (opens in a new tab)</span>
          </a>{" "}
          and participated in 50+ online contests, with a top 3% ranking in
          Moldova.
        </>
      ),
    },
    {
      name: "Problem-solving",
      description:
        "Optimizations, debugging, troubleshooting complex technical issues, logical thinking and pattern recognition.",
    },
  ],
};

const Skills = () => {
  const { technicalExpertise } = skillsData;
  const groups = [
    {
      title: "Frontend engineering",
      skills: technicalExpertise.frontendEngineering.skills,
    },
    {
      title: "Backend development",
      skills: technicalExpertise.backendDevelopment.skills,
    },
    {
      title: "Programming languages",
      skills: technicalExpertise.programmingLanguages,
    },
    { title: "AI tools", skills: technicalExpertise.aiTools },
  ];

  return (
    <section
      id="skills"
      data-room
      aria-labelledby="skills-title"
      className="room"
      style={roomStyle(walls.study)}
    >
      <div className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36 xl:px-20">
        <h2 id="skills-title" className="text-room font-bold text-balance">
          Skills
        </h2>

        <div className="mt-16 grid gap-x-15 gap-y-14 md:mt-20 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xl font-semibold tracking-tight">
                {group.title}
              </h3>
              <p className="text-lede mt-4 max-w-[48ch] font-light text-pretty">
                {group.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>

        <div className="border-vinyl/20 mt-24 border-t pt-12 md:mt-28 md:pt-16">
          <h3 className="text-xl font-semibold tracking-tight">
            Algorithmic skills &amp; achievements
          </h3>
          <dl className="mt-8 grid gap-x-15 gap-y-10 md:grid-cols-2">
            {skillsData.analyticalAndAlgorithmicSkills.map((skill) => (
              <div key={skill.name}>
                <dt className="font-semibold">{skill.name}</dt>
                <dd className="text-lede mt-2 max-w-[48ch] font-light text-pretty">
                  {skill.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Skills;
