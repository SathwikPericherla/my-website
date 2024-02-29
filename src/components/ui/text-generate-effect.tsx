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
              className="dark:text-white text-black opacity-0"
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
        <div className={`dark:text-white font-extrabold mb-3 lg:mb-9 text-black ${size} lg:text-6xl leading-snug tracking-wide`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};