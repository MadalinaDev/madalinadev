"use client";
import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="h-140 w-full bg-yellow-200">
      <div className="text-center">Contact</div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
