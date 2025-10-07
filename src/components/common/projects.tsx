"use client";
import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="h-140 w-full bg-blue-200">
      <div className="text-center">Projects</div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
