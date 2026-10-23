import { roomStyle, walls } from "@/lib/rooms";

export const experienceData = [
  {
    company: "Extensive Digital",
    location: "Chișinău, Moldova",
    role: "Software Developer",
    duration: "Feb 2026 – Present",
    description: [
      "Lead development of full-stack projects with a focus on e-commerce and sales. Solve clients' real problems and help them convert 10,000+ active users into sales through highly UX-focused platforms, strong SEO integration, fast-loading interfaces and an innovative market presence.",
    ],
    techStack: [
      "PHP",
      "Laravel",
      "HTML/CSS",
      "Nginx",
      "Apache",
      "Linux",
      "CodeIgniter",
      "MySQL",
      "MongoDB",
    ],
  },
  // Hidden for now; remove the comment markers to show it again.
  /*
  {
    company: "Freelance",
    location: "Remote",
    role: "Software Developer",
    duration: "Jul 2025 – Jan 2026",
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
  */
  {
    company: "Admin Tools",
    location: "Constanța, Romania",
    role: "Software Developer",
    duration: "Jan 2025 – Jun 2025",
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
    location: "Chișinău, Moldova",
    role: "Software Engineer",
    duration: "Aug 2024 – Dec 2024",
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

const Experience = () => {
  return (
    <section
      id="experience"
      data-room
      aria-labelledby="experience-title"
      className="room"
      style={roomStyle(walls.chronology)}
    >
      <div className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36 xl:px-20">
        <h2 id="experience-title" className="text-room font-bold text-balance">
          Experience
        </h2>
        <p className="text-subtitle text-vinyl-muted mt-3 font-light">
          2+ years building software
        </p>

        <ol className="border-vinyl/20 mt-16 border-t md:mt-20">
          {experienceData.map((experience) => (
            <li
              key={`${experience.company}-${experience.duration}`}
              className="border-vinyl/20 grid gap-x-15 gap-y-4 border-b py-10 md:grid-cols-[13rem_minmax(0,1fr)] md:py-12 xl:grid-cols-[13rem_minmax(0,1fr)_22.5rem]"
            >
              <p className="text-caption text-vinyl-muted tabular-nums md:pt-1.5">
                {experience.duration}
              </p>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {experience.role}
                </h3>
                <p className="text-vinyl-muted mt-1">
                  {experience.company} · {experience.location}
                </p>
                {experience.description.map((item) => (
                  <p
                    key={item}
                    className="mt-5 max-w-[62ch] leading-relaxed text-pretty"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <p className="text-caption text-vinyl-muted text-pretty md:col-start-2 xl:col-start-auto xl:pt-1.5">
                {experience.techStack.join(", ")}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
