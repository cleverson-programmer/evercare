"use client";

import { useEffect, useState } from "react";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SpinningText } from "@/components/ui/spinning-text";

export function StatsSection() {
  const [value, setValue] = useState(0);

  // anima apenas uma vez
  useEffect(() => {
    const step1 = setTimeout(() => setValue(6), 300);      // ~40%
    const step2 = setTimeout(() => setValue(11.25), 1200); // ~75%
    const step3 = setTimeout(() => setValue(14.85), 2000); // ~99%

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  }, []);

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center gap-y-12 md:gap-y-16">

          {/* 🔹 Textos (linha superior) */}
          <div className="text-sm uppercase tracking-wide text-muted-foreground">
            Projects Completed
          </div>

          <div className="text-sm uppercase tracking-wide text-muted-foreground">
            Client Satisfaction
          </div>

          <div className="text-sm uppercase tracking-wide text-muted-foreground">
            Our Commitment
          </div>

          {/* 🔹 Componentes (linha inferior) */}
          <div className="flex justify-center">
            <NumberTicker
              value={1250}
              delay={0.2}
              className="text-5xl font-bold text-primary"
            />
          </div>

          <div className="flex justify-center">
            <AnimatedCircularProgressBar
              value={value}
              min={0}
              max={15}
              gaugePrimaryColor="rgb(79 70 229)"
              gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
              className="size-44"
            />
          </div>

          <div className="flex justify-center">
            <SpinningText
              duration={12}
              radius={6}
              className="text-lg font-semibold text-primary"
            >
              TRUSTED • PROFESSIONAL • RELIABLE •
            </SpinningText>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StatsSection;
