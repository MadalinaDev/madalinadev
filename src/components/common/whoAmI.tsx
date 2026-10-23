import { roomStyle, walls } from "@/lib/rooms";
import { site } from "@/lib/site";
import { ProjectSnippet } from "./projects";
import { projects } from "./projectsData";

const WhoAmI = () => {
  const [featured] = projects;

  return (
    <section
      id="intro"
      data-room
      aria-labelledby="exhibition-title"
      className="room md:min-h-[calc(100svh-4rem)]"
      style={roomStyle(walls.entrance)}
    >
      <div className="mx-auto max-w-[1440px] px-5 pt-10 pb-24 md:px-10 md:pt-14 md:pb-28 xl:px-20">
        <div className="grid gap-x-15 gap-y-10 xl:grid-cols-[minmax(0,1fr)_22.5rem] xl:items-end">
          <div>
            <h1
              id="exhibition-title"
              className="text-title font-bold text-balance"
            >
              Madalina Chirpicinic
            </h1>
            <p className="text-subtitle mt-4 max-w-[32ch] font-light text-balance">
              {site.role}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-caption text-vinyl-muted text-pretty">
              I design and ship production systems and modern infrastructure,
              focused on performance, clean architecture and measurable UX.
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="block text-[clamp(1.125rem,1rem+0.6vw,1.5rem)] leading-snug font-semibold underline decoration-1 underline-offset-[0.2em] hover:decoration-2"
              >
                madalina.chirpicinic
                <wbr />
                @gmail.com
              </a>
              <span className="text-caption text-vinyl-muted mt-1 block">
                Chișinău, Moldova
              </span>
            </p>
          </div>
        </div>
        {featured && <ProjectSnippet project={featured} detailsId="work" />}
      </div>
    </section>
  );
};

export default WhoAmI;
