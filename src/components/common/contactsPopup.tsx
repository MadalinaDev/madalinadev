"use client";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const ContactsPopover = () => {
  return (
    <div className="text-muted-foreground sticky top-55 hidden md:flex left-4 lg:left-10 mx-10 flex flex-col gap-4 absolute w-fit z-60">
      <a
        href="https://www.linkedin.com/in/madalina-chirpicinic/"
        className="w-fit rounded-full border-2 border-foreground/40 p-1 text-foreground/40 duration-400 hover:border-foreground hover:text-foreground"
      >
        <FiLinkedin className="size-6" />
      </a>
      <a
        href="https://github.com/MadalinaDev"
        className="w-fit rounded-full border-2 border-foreground/40 p-1 text-foreground/40 duration-400 hover:border-foreground hover:text-foreground"
      >
        <FiGithub className="size-6" />
      </a>
      <a
        href="mailto:madalina.chirpicinic@gmail.com"
        className="w-fit rounded-full border-2 border-foreground/40 p-1 text-foreground/40 duration-400 hover:border-foreground hover:text-foreground"
      >
        <FiMail className="size-6" />
      </a>
    </div>
  );
};

export default ContactsPopover;
