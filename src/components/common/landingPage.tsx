"use client";

import { useRef } from "react";
import Header from "../layout/header";
import WhoAmI from "./whoAmI";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import ContactsPopover from "./contactsPopup";
import { Pointer } from "../ui/pointer";
import { useTheme } from "next-themes";

const LandingPage = () => {
  const whoAmIRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleHeaderClick = (id: string) => {
    switch (id) {
      case "whoami":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case "logo":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case "experience":
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        whoAmIRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
    return;
  };

  const { theme } = useTheme();

  console.log(theme);

  return (
    <div className="relative w-full">
      <Header handleClick={handleHeaderClick} />
      <ContactsPopover />
      <div className="mx-auto flex w-full max-w-[1580px] flex-col gap-y-2 px-5 md:px-32">
        <WhoAmI ref={whoAmIRef} />
        <Projects ref={projectsRef} />
        <Experience ref={experienceRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </div>
      <Pointer key={theme}>
        <div
          className={`pointer-events-none absolute top-0 left-0 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[24px] transition-all duration-300 ${
            theme !== "dark"
              ? "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.1)_20%,rgba(0,0,0,0)_60%)]"
              : "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.1)_20%,rgba(255,255,255,0)_60%)]"
          }`}
        />
      </Pointer>
    </div>
  );
};

export default LandingPage;
