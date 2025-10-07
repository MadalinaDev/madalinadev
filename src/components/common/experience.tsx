"use client";
import { forwardRef } from "react";


const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="h-140 w-full bg-green-200">
      <div className="text-center">Experience</div>
    </div>
  );
});

Experience.displayName = "Experience";

export default Experience;
