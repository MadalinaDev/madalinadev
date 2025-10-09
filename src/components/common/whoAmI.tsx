"use client";
import { forwardRef } from "react";
import { AnimatedSection } from "../layout/animatedSection";


const WhoAmI = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section className="flex h-screen flex-col items-center justify-start pt-65 text-center lg:pt-55">
      <AnimatedSection>
        <h1 className="text-foreground font-sans text-5xl leading-tight font-bold tracking-tight lg:text-7xl">
          I&lsquo;m <span className="">Madalina Chirpicinic</span>
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="text-ring mt-4 font-sans text-4xl font-medium lg:text-6xl">
          Software Engineer
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <p className="text-ring text-md mt-2 text-center font-sans font-medium lg:text-lg">
          Turning ideas into intuitive, modern, reliable software.
        </p>
      </AnimatedSection>
    </section>
  );
});

WhoAmI.displayName = "WhoAmI";

export default WhoAmI;
