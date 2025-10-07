"use client";
import { forwardRef } from "react";

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="h-140 w-full bg-purple-200">
      <div className="text-center">Skills</div>
    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
