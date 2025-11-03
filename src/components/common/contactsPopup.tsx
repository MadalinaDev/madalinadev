"use client";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const ContactsPopover = () => {
  return (
    <div className="text-muted-foreground absolute sticky top-55 left-4 z-60 mx-10 flex hidden w-fit flex-col gap-4 md:flex lg:left-10">
      <a
        href="https://www.linkedin.com/in/madalina-chirpicinic/"
        target="_blank"
        className="border-foreground/40 text-foreground/40 hover:border-foreground hover:text-foreground w-fit rounded-full border-2 p-1 duration-400"
      >
        <FiLinkedin className="size-6" />
      </a>
      <a
        href="https://github.com/MadalinaDev"
        target="_blank"
        className="border-foreground/40 text-foreground/40 hover:border-foreground hover:text-foreground w-fit rounded-full border-2 p-1 duration-400"
      >
        <FiGithub className="size-6" />
      </a>
      <a
        href="mailto:madalina.chirpicinic@gmail.com"
        target="_blank"
        className="border-foreground/40 text-foreground/40 hover:border-foreground hover:text-foreground w-fit rounded-full border-2 p-1 duration-400"
      >
        <FiMail className="size-6" />
      </a>
    </div>
  );
};

export default ContactsPopover;
