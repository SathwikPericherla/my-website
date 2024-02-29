import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = "Hi, I am Sathwik";
const desc = "Web Developer";

export function HeroText() {
  return <TextGenerateEffect words={words} size="text-5xl mt-4 lg:mt-0"/>;
}

export function HeroDesc(){
  return <TextGenerateEffect words={desc} size="lg:text-4xl text-3xl"/>
}