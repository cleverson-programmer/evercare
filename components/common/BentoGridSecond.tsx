import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Compare } from "@/components/ui/compare";
import { GiMagicBroom, GiFishBucket, GiVacuumCleaner } from "react-icons/gi";
import { IoWaterSharp } from "react-icons/io5";
export default function BentoGridSecond() {
  return (
    <BentoGrid className="w-full md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "Before & After Deep Cleaning",
    description: "See the transformation after our professional deep cleaning service.",
    header: (
      <Compare
        firstImage="/assets/images/main1.jpg"
        secondImage="/assets/images/main2.jpg"
        slideMode="hover"
        className="rounded-xl"
      />
    ),
    className: "md:col-span-2",
    icon: <GiMagicBroom className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Kitchen Restoration",
    description: "Professional kitchen cleaning results.",
    header: (
      <Compare
        firstImage="/assets/images/main1.jpg"
        secondImage="/assets/images/main2.jpg"
        slideMode="drag"
        showHandlebar
        className="rounded-xl"
      />
    ),
    className: "md:col-span-1",
    icon: <GiFishBucket  className="h-4 w-4 text-neutral-500" />,
  },
    {
    title: "Kitchen Restoration",
    description: "Professional kitchen cleaning results.",
    header: (
      <Compare
        firstImage="/assets/images/main1.jpg"
        secondImage="/assets/images/main2.jpg"
        slideMode="drag"
        showHandlebar
        className="rounded-xl"
      />
    ),
    className: "md:col-span-1",
    icon: <GiVacuumCleaner className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Before & After Deep Cleaning",
    description: "See the transformation after our professional deep cleaning service.",
    header: (
      <Compare
        firstImage="/assets/images/main1.jpg"
        secondImage="/assets/images/main2.jpg"
        slideMode="hover"
        className="rounded-xl"
      />
    ),
    className: "md:col-span-2",
    icon: <IoWaterSharp className="h-4 w-4 text-neutral-500" />,
  }
];

