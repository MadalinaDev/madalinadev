"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ui/theme-toggle";

const sections = [
  { id: "experience", name: "Experience" },
  { id: "work", name: "Work" },
  { id: "skills", name: "Skills" },
  { id: "enquiries", name: "Enquiries" },
];

const Header = () => {
  const [pastTitle, setPastTitle] = useState(false);

  // --- show the name in the bar once the exhibition title has scrolled away ---
  useEffect(() => {
    const title = document.getElementById("exhibition-title");
    if (!title) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastTitle(entry ? !entry.isIntersecting : false),
      { rootMargin: "-64px 0px 0px 0px" },
    );
    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="top"
      className="wall-transition bg-wall-top text-vinyl sticky top-0 z-40"
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10 xl:px-20">
        <a
          href="#top"
          aria-hidden={!pastTitle}
          tabIndex={pastTitle ? undefined : -1}
          className={cn(
            "hidden font-semibold tracking-tight transition-opacity duration-300 md:block",
            pastTitle ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          Madalina Chirpicinic
        </a>
        <nav
          aria-label="Sections"
          className="ml-auto flex items-center gap-3 md:gap-6"
        >
          <ul className="flex items-center gap-4 text-sm md:gap-8 md:text-[0.9375rem]">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="decoration-1 underline-offset-[0.3em] hover:underline"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
