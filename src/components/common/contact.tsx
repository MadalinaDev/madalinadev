"use client";
import { forwardRef } from "react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";


const Contact = forwardRef<HTMLDivElement>((props, ref) => {

  const handleGetResume = () => {
    window.open("/resume.pdf", "_blank");
  }

  return (
    <div ref={ref} className="h-50 mx-auto flex justify-center items-center">
      <InteractiveHoverButton onClick={handleGetResume}> Get resume </InteractiveHoverButton>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
