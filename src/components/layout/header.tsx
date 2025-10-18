"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // --- timer for header appearance (fade in) animation ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <header
      className={`bg-muted-foreground/10 sticky top-0 z-50 flex flex-col items-center justify-center px-12 py-2 transition-all duration-700 ease-out md:flex-row md:justify-between md:px-36 ${
        fadeIn ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1580px] items-center justify-between">
        <div
          className="text-md text-foreground/66 hover:text-foreground sticky left-4 font-mono font-semibold duration-300 hover:cursor-pointer"
          onClick={() => handleClick("logo")}
        >
          {"<madalina.dev/>"}
        </div>
        {/* desktop links */}
        <nav className="hidden w-full items-center justify-end gap-x-6 md:flex md:flex-row">
          {sections.map((s) => (
            <LinkElement
              key={s.id}
              name={s.name}
              handleClick={() => handleClick(s.id)}
            />
          ))}
          <AnimatedThemeToggler className="ml-4" duration={600} />
        </nav>
        {/* mobile menu button */}
        <button onClick={() => setOpenMenu((prev) => !prev)}>
          {openMenu ? (
            <X className="hover:cursor-pointer md:hidden" />
          ) : (
            <Menu className="hover:cursor-pointer md:hidden" />
          )}
        </button>
      </div>
      {/* mobile menu links */}
      <AnimatePresence>
        {openMenu && (
          <motion.nav
            key="mobileMenu"
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-muted-foreground/10 absolute top-full left-0 z-40 flex w-full flex-col items-center justify-center pb-3 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center">
              {sections.map((s) => (
                <LinkElement
                  key={s.id}
                  name={s.name}
                  handleClick={() => {
                    setOpenMenu(false);
                    handleClick(s.id);
                  }}
                />
              ))}
              <div onClick={() => setOpenMenu(false)}>
                <AnimatedThemeToggler duration={600} />
              </div>
            </nav>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const LinkElement = ({
  name,
  handleClick,
}: {
  name: string;
  handleClick: () => void;
}) => {
  return (
    <button
      className="group text-muted-foreground/90 hover:text-foreground relative overflow-hidden px-3 py-2 hover:cursor-pointer"
      onClick={handleClick}
    >
      <span className="relative z-10">{name}</span>
      <div className="text-foreground absolute bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 transform bg-current transition-all duration-500 group-hover:w-[75%]"></div>{" "}
    </button>
  );
};

export default Header;
