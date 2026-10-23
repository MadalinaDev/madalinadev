import { ArrowUpRight } from "lucide-react";
import { roomStyle, walls } from "@/lib/rooms";
import { site } from "@/lib/site";

const Contact = () => {
  return (
    <section
      id="enquiries"
      data-room
      aria-labelledby="enquiries-title"
      className="room"
      style={roomStyle(walls.entrance)}
    >
      <div className="mx-auto max-w-[1440px] px-5 pt-28 pb-24 md:px-10 md:pt-36 md:pb-32 xl:px-20">
        <h2 id="enquiries-title" className="text-room font-bold text-balance">
          Enquiries
        </h2>
        <p className="text-subtitle text-vinyl-muted mt-3 font-light">
          Open for challenges.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-12 inline-block text-[clamp(1.75rem,1rem+3.6vw,4rem)] leading-tight font-bold tracking-[-0.02em] underline decoration-2 underline-offset-[0.16em] hover:decoration-[3px] md:mt-16"
        >
          madalina.chirpicinic
          <wbr />
          @gmail.com
        </a>

        <ul className="text-lede mt-14 flex flex-wrap gap-x-10 gap-y-4">
          {site.profiles.map((profile) => (
            <li key={profile.name}>
              <a
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 underline decoration-1 hover:decoration-2"
              >
                {profile.name}
                <ArrowUpRight aria-hidden className="size-5" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
          {/* CV link hidden for now; public/resume.pdf is kept.
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 underline decoration-1 hover:decoration-2"
            >
              Résumé, PDF
              <ArrowUpRight aria-hidden className="size-5" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          */}
        </ul>

        <p className="text-caption text-vinyl-muted mt-12">
          Based in Chișinău, Moldova.
        </p>
      </div>
    </section>
  );
};

export default Contact;
