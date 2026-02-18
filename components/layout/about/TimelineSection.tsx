"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Heart, ShieldCheck, Sparkles, Home } from "lucide-react";

const TimelineSection = () => {
  const data = [
    {
      title: "The Beginning",
      content: (
        <div>
          <p className="text-muted-foreground text-sm md:text-base font-body mb-4 leading-relaxed">
            Founded by the <strong className="text-foreground">Lopes & Almeida family</strong>, A&L Total Care Solutions was born from a personal understanding of the challenges families face when caring for loved ones with limited mobility.
          </p>
          <p className="text-muted-foreground text-sm md:text-base font-body leading-relaxed">
            Our founders saw a gap in the market: families needed not just caregiving, but a complete care ecosystem that included professional environmental hygiene.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-card rounded-lg p-4 shadow-soft">
              <Heart className="w-5 h-5 text-accent mb-2" />
              <p className="text-xs text-muted-foreground font-body">Family-founded with a mission of compassion</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-soft">
              <Home className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs text-muted-foreground font-body">Based in Massachusetts</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Our Growth",
      content: (
        <div>
          <p className="text-muted-foreground text-sm md:text-base font-body mb-4 leading-relaxed">
            As word spread about our unique 360-degree care approach, we expanded our services to reach more families across Massachusetts.
          </p>
          <p className="text-muted-foreground text-sm md:text-base font-body leading-relaxed">
            We invested in professional certifications, rigorous training, and built a team of dedicated caregivers who share our family values.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-card rounded-lg p-4 shadow-soft">
              <ShieldCheck className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs text-muted-foreground font-body">Fully insured & bonded</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-soft">
              <Sparkles className="w-5 h-5 text-accent mb-2" />
              <p className="text-xs text-muted-foreground font-body">Professionally certified team</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Today",
      content: (
        <div>
          <p className="text-muted-foreground text-sm md:text-base font-body mb-6 leading-relaxed">
            Today, A&L Total Care Solutions stands as a trusted partner for families in need. Our milestones include:
          </p>
          <div className="space-y-3">
            {[
              "Dedicated patient support for seniors & recovery patients",
              "Health-focused environmental cleaning services",
              "Fully insured and bonded operations",
              "Certified caregiving professionals on every team",
              "360-degree care approach — body, home, and peace of mind",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✅</span>
                <p className="text-muted-foreground text-sm font-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-background">
      <Timeline data={data} />
    </section>
  );
};

export default TimelineSection;
