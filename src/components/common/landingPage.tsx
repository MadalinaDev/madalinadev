"use client";
import { useRef } from "react";
import Header from "../layout/header";
import WhoAmI from "./whoAmI";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import ContactsPopover from "./contactsPopup";

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

  return (
    <div className="w-full relative">
      <Header handleClick={handleHeaderClick} /> 
      <ContactsPopover />
      <div className="mx-auto flex w-full max-w-[1580px] flex-col gap-y-2 px-5 md:px-32">
        <WhoAmI ref={whoAmIRef} />
        <Projects ref={projectsRef} />
        <Experience ref={experienceRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
};

export default LandingPage;
