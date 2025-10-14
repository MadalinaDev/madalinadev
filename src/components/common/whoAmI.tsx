"use client";
import { forwardRef } from "react";
import { AnimatedSection } from "../layout/animatedSection";
import { AuroraText } from "../ui/aurora-text";


const WhoAmI = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section className="md:-pt-10 my-30 mb-100 flex flex-col items-center justify-start pt-40 text-center md:mb-50 md:pt-0">
      <AnimatedSection>
        <h1 className="text-foreground text-5xl font-bold tracking-tight lg:text-7xl">
          <span className="font-semibold">I&apos;m </span>
          <AuroraText
            speed={1.5}
            colors={[
              "#AF47D2",
              "#8b23adff",
              "#FFDB00",
            ]}
          >
            Madalina Chirpicinic
          </AuroraText>
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="text-foreground mt-4 text-xl font-medium lg:text-2xl">
          Software Engineer
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <p className="text-foreground text-md mt-2 text-center font-medium lg:text-lg">
          Turning ideas into intuitive and reliable software.
        </p>
      </AnimatedSection>
    </section>
  );
});

WhoAmI.displayName = "WhoAmI";

export default WhoAmI;
