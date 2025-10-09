"use client";
import { useRef } from "react";
import Header from "../layout/header";
import WhoAmI from "./whoAmI";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";


const LandingPage = () => {
    const whoAmIRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const handleHeaderClick = (id: string) => {
        console.log("enterd handleHeaderClick(): ", id)
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
    }

  return (
    <div className="w-full">
      <Header handleClick={handleHeaderClick} />
      <div className="flex flex-col gap-y-2 px-10 md:px-32">
        <WhoAmI ref={whoAmIRef} />
        <Experience ref={experienceRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
};

export default LandingPage;
