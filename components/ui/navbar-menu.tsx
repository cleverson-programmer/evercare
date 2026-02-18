"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link"
import Image from "next/image"

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  href?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      {href ? (
        <Link href={href}>
          <motion.p
            transition={{ duration: 0.3 }}
            className="cursor-pointer text-foreground hover:opacity-80"
          >
            {item}
          </motion.p>
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-foreground hover:opacity-80"
        >
          {item}
        </motion.p>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-background rounded-2xl overflow-hidden border border-border shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-[640px] max-w-[90vw] p-5"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="
        relative
        flex
        justify-center
        space-x-6
        px-8
        py-6
        text-lg
        font-bold
        uppercase
        text-black
        tracking-wide
      "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link
      href={href}
      className="
        flex items-start gap-3
        p-2.5
        rounded-lg
        hover:bg-accent
        transition-colors
      "
    >
      <Image
        src={src}
        width={56}
        height={56}
        alt={title}
        className="shrink-0 rounded-md object-cover shadow-sm"
      />

      <div className="min-w-0">
        <h4 className="text-sm font-semibold text-foreground leading-tight">
          {title}
        </h4>

        <p className="text-xs text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};
