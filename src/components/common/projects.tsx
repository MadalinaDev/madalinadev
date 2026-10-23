"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { hostOf, roomStyle, screenCount, type Project } from "@/lib/rooms";
import ImageGalleryDialog from "./imageGalleryDialog";
import { projects } from "./projectsData";

const linkStyles =
  "cursor-pointer underline decoration-1 underline-offset-[0.22em] hover:decoration-2";

// --- the entrance strip: the cover hung next to the highlighted screens ---
export const ProjectSnippet = ({
  project,
  detailsId,
}: {
  project: Project;
  detailsId: string;
}) => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const { cover } = project;
  const coverRatio = cover.width / cover.height;
  const highlights = project.screens
    .map((screen, index) => ({ screen, index }))
    .filter(({ screen }) => screen.highlight);
  // equal heights on wide screens: each column's share is its print's aspect ratio
  const columns = [coverRatio, ...highlights.map(() => 0.8)]
    .map((ratio) => `${ratio}fr`)
    .join(" ");

  return (
    <figure className="mt-14 md:mt-20">
      <ul
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 md:-mx-10 md:scroll-px-10 md:gap-6 md:px-10 xl:mx-0 xl:grid xl:overflow-visible xl:px-0 xl:pb-0"
        style={{ gridTemplateColumns: columns }}
      >
        <li className="shrink-0 snap-start">
          <button
            type="button"
            onClick={() => setGalleryIndex(0)}
            aria-label={`View ${project.title}, ${project.screens[0]?.caption ?? "home"}`}
            className="hang relative block h-52 cursor-zoom-in overflow-hidden bg-white md:h-64 xl:h-auto xl:w-full"
            style={{ aspectRatio: coverRatio }}
          >
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              sizes="(min-width: 1280px) 34rem, 32rem"
              className="object-cover object-top"
            />
          </button>
        </li>
        {highlights.map(({ screen, index }) => (
          <li key={screen.src} className="shrink-0 snap-start">
            <button
              type="button"
              onClick={() => setGalleryIndex(index)}
              aria-label={`View ${project.title}, ${screen.caption}`}
              className="hang relative block aspect-[4/5] h-52 cursor-zoom-in overflow-hidden bg-white md:h-64 xl:h-auto xl:w-full"
            >
              <Image
                src={screen.src}
                alt=""
                fill
                sizes="(min-width: 1280px) 14rem, 13rem"
                className="object-cover object-top"
              />
            </button>
          </li>
        ))}
      </ul>
      <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-xl font-semibold tracking-tight">
          {project.title}
        </span>
        <span className="text-vinyl-muted">{project.kind}</span>
        <span aria-hidden className="text-vinyl-muted">
          ·
        </span>
        <button
          type="button"
          onClick={() => setGalleryIndex(0)}
          className={linkStyles}
        >
          View {screenCount(project.screens.length).toLowerCase()}
        </button>
        <span aria-hidden className="text-vinyl-muted">
          ·
        </span>
        <a
          href={`#${detailsId}`}
          className={cn("inline-flex items-center gap-1", linkStyles)}
        >
          Project details
          <ArrowDown aria-hidden className="size-4" />
        </a>
      </figcaption>
      <ImageGalleryDialog
        project={project}
        index={galleryIndex}
        onIndexChange={setGalleryIndex}
      />
    </figure>
  );
};

export const ProjectRoom = ({
  project,
  id,
  heading,
  flip = false,
}: {
  project: Project;
  id?: string;
  heading?: ReactNode;
  flip?: boolean;
}) => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <section
      id={id ?? project.id}
      data-room
      aria-labelledby={`${project.id}-title`}
      className="room"
      style={roomStyle(project.wall)}
    >
      <div className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36 xl:px-20">
        {heading}
        <div
          className={cn(
            "grid gap-x-15 gap-y-10",
            heading && "mt-16 md:mt-20",
            flip
              ? "xl:grid-cols-[22.5rem_minmax(0,1fr)]"
              : "xl:grid-cols-[minmax(0,1fr)_22.5rem]",
          )}
        >
          <Hang
            project={project}
            onOpen={() => setGalleryIndex(0)}
            className={cn(flip && "xl:order-2")}
          />
          <WallLabel project={project} onOpen={() => setGalleryIndex(0)} />
        </div>
        <ProjectNotes project={project} onOpen={setGalleryIndex} />
      </div>
      <ImageGalleryDialog
        project={project}
        index={galleryIndex}
        onIndexChange={setGalleryIndex}
      />
    </section>
  );
};

const Hang = ({
  project,
  onOpen,
  className,
}: {
  project: Project;
  onOpen: () => void;
  className?: string;
}) => {
  const { cover } = project;
  const screens = screenCount(project.screens.length);
  // tall full-page captures hang cropped to a 16:10 window from the top
  const ratio = Math.max(cover.width / cover.height, 1.6);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${screens.toLowerCase()} of ${project.title}`}
      className={cn(
        "hang group relative block w-full cursor-zoom-in self-start overflow-hidden bg-white",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        sizes="(min-width: 1280px) 55rem, (min-width: 768px) calc(100vw - 5rem), calc(100vw - 2.5rem)"
        className="object-cover object-top"
      />
      <span
        aria-hidden
        className="label-card text-caption absolute bottom-4 left-4 px-3 py-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        View {screens.toLowerCase()}
      </span>
    </button>
  );
};

const WallLabel = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) => {
  return (
    <div className="label-card self-start px-6 py-5">
      <h3
        id={`${project.id}-title`}
        className="text-2xl font-bold tracking-tight"
      >
        {project.title}
      </h3>
      <p className="text-caption mt-1.5">{project.kind}</p>
      <p className="text-caption mt-3">{project.medium.join(", ")}</p>
      <p className="text-caption mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
        <button type="button" onClick={onOpen} className={linkStyles}>
          {screenCount(project.screens.length)}
        </button>
        <span aria-hidden>·</span>
        <span>
          live at{" "}
          <ExternalLink href={project.websiteLink}>
            {hostOf(project.websiteLink)}
          </ExternalLink>
        </span>
        {project.githubLink && (
          <>
            <span aria-hidden>·</span>
            <ExternalLink href={project.githubLink}>Source</ExternalLink>
          </>
        )}
      </p>
    </div>
  );
};

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={cn("inline-flex items-center gap-0.5", linkStyles)}
  >
    {children}
    <ArrowUpRight aria-hidden className="size-3.5" />
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);

const ProjectNotes = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (index: number) => void;
}) => {
  return (
    <div className="mt-24 md:mt-32">
      <div className="grid gap-x-15 gap-y-12 xl:grid-cols-[minmax(0,1fr)_22.5rem]">
        <p className="text-lede max-w-[46ch] text-pretty">
          {project.description}
        </p>
        <div>
          <h4 className="font-semibold">Key features</h4>
          <ul className="text-vinyl-muted mt-3 space-y-2 leading-relaxed text-pretty">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <ol
        aria-label={`${project.title} screens`}
        className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 xl:grid-cols-6"
      >
        {project.screens.map((screen, index) => (
          <li key={screen.src}>
            <button
              type="button"
              onClick={() => onOpen(index)}
              className="group block w-full cursor-zoom-in text-left"
            >
              <span className="hang relative block aspect-[4/5] overflow-hidden bg-white">
                <Image
                  src={screen.src}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 12rem, (min-width: 768px) 30vw, 45vw"
                  className="object-cover object-top"
                />
              </span>
              <span className="text-caption mt-3 block decoration-1 underline-offset-[0.22em] group-hover:underline">
                {screen.caption}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectRoom
          key={project.id}
          project={project}
          id={index === 0 ? "work" : undefined}
          flip={index % 2 === 1}
          heading={
            index === 0 ? (
              <h2 className="text-room font-bold text-balance">Work</h2>
            ) : undefined
          }
        />
      ))}
    </>
  );
};

export default Projects;
