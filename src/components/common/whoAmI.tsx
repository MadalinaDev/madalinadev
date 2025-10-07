"use client";
import { forwardRef } from "react";

const WhoAmI = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="h-140 w-full bg-red-200">
      <div className="text-center">Who Am I</div>
    </div>
  );
});

WhoAmI.displayName = "WhoAmI";

export default WhoAmI;