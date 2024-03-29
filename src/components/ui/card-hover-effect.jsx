import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid gap-3 mx-auto w-[80%]  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          target="blank"
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-400 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card imageSrc={item.image}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  imageSrc,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden shadow-2xl dark:shadow-gray-800 dark:bg-black bg-slate-100  border-2 border-slate-300  dark:border-white/[0.2]  relative z-20",
        className
      )}
    >
      <div className="relative">
        {imageSrc && <img src={imageSrc} alt="Card Image" className="w-full mb-4 rounded-lg object-cover h-[400px]" />}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={cn("text-black dark:text-zinc-100 font-bold tracking-wide mt-4 text-2xl", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "mt-1 text-black dark:text-zinc-400 tracking-wide leading-relaxed text-lg",
        className
      )}
    >
      {children}
    </p>
  );
};
