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
      <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-y-2 px-5 md:px-20">
        <WhoAmI ref={whoAmIRef} />
        <Projects ref={projectsRef} />
        <Experience ref={experienceRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </div>
      <Pointer key={theme}>
        <div
          className={`pointer-events-none h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
            theme !== "dark"
              ? "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.03)_35%,rgba(0,0,0,0)_70%)]"
              : "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.04)_35%,rgba(255,255,255,0)_70%)]"
          }`}
          style={{ filter: "blur(40px)" }}
        />
      </Pointer>
    </div>
  );
};

export default LandingPage;
