"use client";
import { forwardRef } from "react";
import { AnimatedSection } from "../layout/animatedSection";


const WhoAmI = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section className="flex my-30 flex-col items-center justify-start pt-40 md:pt-0 md:-pt-10 text-center mb-100 md:mb-50">
      <AnimatedSection>
        <h1 className="text-foreground font-sans text-5xl leading-tight font-bold tracking-tight lg:text-7xl">
          I&apos;m <span className="">Madalina Chirpicinic</span>
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="text-ring mt-4 font-sans text-3xl font-medium lg:text-5xl">
          Software Engineer
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <p className="text-ring text-md mt-2 text-center font-sans font-medium lg:text-lg">
          Turning ideas into intuitive and reliable software.
        </p>
      </AnimatedSection>
    </section>
  );
});

WhoAmI.displayName = "WhoAmI";

export default WhoAmI;
