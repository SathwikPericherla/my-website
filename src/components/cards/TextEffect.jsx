import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = "Hi, I am Sathwik";
const desc = "";

export function HeroText() {
  return <TextGenerateEffect words={words} size="text-5xl font- mt-4 lg:mt-0"/>;
}

export function HeroDesc(){
  return <TextGenerateEffect words={desc} size="text-white ml-4 text-5xl font- mt-4 lg:mt-0"/>
}