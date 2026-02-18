"use client";
import { cn } from "@/lib/utils";

interface ServiceTabContentProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode; // opcional para botão ou form
}

export default function ServiceTabContent({
  title,
  description,
  image,
  imageAlt,
  className,
  children,
}: ServiceTabContentProps) {
  return (
    <div className={cn("mx-auto max-w-5xl", className)}>
      <div
        className="
          relative flex flex-col md:flex-row items-center gap-10
          rounded-3xl border border-border
          bg-background/60 backdrop-blur-xl
          shadow-xl
          p-8 md:p-12
          transition-all duration-300
        "
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={imageAlt || title}
            className="
              w-full h-64 md:h-80
              object-cover
              rounded-2xl
              transition-transform duration-500
              group-hover:scale-[1.02]
            "
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-5">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {title}
          </h3>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            {description}
          </p>

          {children && (
            <div className="pt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
