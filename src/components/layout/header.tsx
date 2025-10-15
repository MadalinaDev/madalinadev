"use client";

import { useState, useEffect } from "react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";


const Header = ({ handleClick }: { handleClick: (id: string) => void }) => {
  const sections = [
    {
      id: "whoami",
      name: "Who Am I",
    },
    {
      id: "projects",
      name: "Projects",
    },
    {
      id: "experience",
      name: "Experience",
    },
    {
      id: "skills",
      name: "Skills",
    },
    {
      id: "contact",
      name: "Contact",
    },
  ];

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`bg-muted-foreground/10 sticky top-0 z-50 flex flex-col items-center justify-center px-24 py-2 transition-all duration-700 ease-out md:flex-row md:justify-between md:px-36 ${
        fadeIn ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1580px] items-center">
        <div
          className="text-md text-foreground/66 hover:text-foreground sticky left-4 font-mono font-semibold duration-300 hover:cursor-pointer"
          onClick={() => handleClick("logo")}
        >
          {"<madalina.dev/>"}
        </div>
        <div className="hidden w-full items-center justify-end gap-x-6 md:flex md:flex-row">
          {sections.map((s) => (
            <button
              key={s.id}
              className="group text-muted-foreground/90 hover:text-foreground relative overflow-hidden px-3 py-2 hover:cursor-pointer"
              onClick={() => handleClick(s.id)}
            >
              <span className="relative z-10">{s.name}</span>
              <div className="text-foreground absolute bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 transform bg-current transition-all duration-500 group-hover:w-[75%]"></div>{" "}
            </button>
          ))}
          <AnimatedThemeToggler className="ml-4" duration={600} />
        </div>
      </div>
    </header>
  );
};

export default Header;
