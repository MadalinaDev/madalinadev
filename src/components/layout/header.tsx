"use client";

import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = ({ handleClick }: { handleClick: (id: string) => void }) => {
  const sections = [
    {
      id: "whoami",
      name: "Who Am I",
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
      id: "projects",
      name: "Projects",
    },
    {
      id: "contact",
      name: "Contact",
    },
  ];

  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-muted-foreground/10 sticky top-0 z-50 flex flex-col md:flex-row items-center md:justify-between justify-center px-24 py-2 md:px-36">
      <div
        className="text-md text-foreground/65 sticky left-4 font-mono font-semibold hover:cursor-pointer"
        onClick={() => handleClick("logo")}
      >
        {"<madalina.dev/>"}
      </div>
      <div className="md:flex w-full hidden md:flex-row items-center justify-end gap-x-6">
        {sections.map((s) => (
          <button
            key={s.id}
            className="group hover:text-muted-foreground/45 relative overflow-hidden px-3 py-2 hover:cursor-pointer"
            onClick={() => handleClick(s.id)}
          >
            <span className="relative z-10">{s.name}</span>
            <div className="text-muted-foreground/45 absolute bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 transform bg-current transition-all duration-500 group-hover:w-[80%]"></div>{" "}
          </button>
        ))}
        <Button variant="outline" className="bg-transparent" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
