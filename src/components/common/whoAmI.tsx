"use client";
import { forwardRef } from "react";
import { AnimatedSection } from "../layout/animatedSection";

const WhoAmI = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex min-h-[80vh] w-full flex-col items-start justify-center pt-10 pb-24 md:pt-20 md:pb-32"
    >
      <AnimatedSection>
        <div className="text-muted-foreground/80 mb-6 flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Open for challenges
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <h1 className="text-foreground text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl lg:text-7xl">
          Madalina Chirpicinic
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h2 className="text-muted-foreground mt-4 max-w-3xl text-xl leading-tight font-light md:text-3xl lg:text-4xl">
          Full-stack engineer building{" "}
          <span className="text-foreground font-normal">
            fast, thoughtful web products
          </span>{" "}
          end&#8209;to&#8209;end.
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.35}>
        <p className="text-muted-foreground/90 mt-8 max-w-2xl text-base leading-relaxed md:text-lg">
          I design and ship production
          systems and modern infrastructure - focused on performance, clean architecture and
          measurable UX.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <div className="text-muted-foreground mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm">
          <span>Chisinau, MD</span>
          <span className="text-muted-foreground/40">/</span>
          <span>Remote-friendly</span>
          <span className="text-muted-foreground/40">/</span>
          <span>2+ years building software</span>
        </div>
      </AnimatedSection>
    </section>
  );
});

WhoAmI.displayName = "WhoAmI";

export default WhoAmI;
