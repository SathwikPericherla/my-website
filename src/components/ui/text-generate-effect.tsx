import React from "react";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

const arr=["text-2xl","text-3xl","text-4xl","text-5xl","text-6xl"]

export const TextGenerateEffect = ({
  words,
  className,
  size,
}: {
  words: string;
  className?: string;
  size: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={` opacity-0 ${idx === wordsArray.length - 1 ? 'bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent' : ''}`}
            >
              {word}{" "} 
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="">
        <div className={` font-extrabold mb-3 lg:mb-9 ${size} lg:text-6xl leading-snug tracking-wide`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};