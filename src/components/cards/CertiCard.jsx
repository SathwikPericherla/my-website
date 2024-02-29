import { HoverEffect } from "../ui/card-hover-effect";
import ibmcerti from "../certificates/ibmcerti.png"
import bsnl from "../certificates/bsnl.png"
import matlab from "../certificates/matlab.png"
import reactnative from "../certificates/reactnative.png"

export function CertiCard() {
  return (
    <div className="">
      <HoverEffect items={projects}/>
    </div>
  );
}
export const projects = [
  {
    title: "Front-End Development",
    description:
      "IBM",
    link: "https://stripe.com",
    image: ibmcerti
  },
  {
    title: "React Native Bootcamp",
    description:
      "UDEMY",
    link: "https://netflix.com", 
    image: reactnative
  },
  {
    title: "Telecommunications",
    description:
      "BSNL",
    link: "https://google.com",
    image: bsnl
  },
  {
    title: "Matlab OnRamp",
    description:
      "MATLAB",
    link: "https://meta.com",
    image: matlab
  },
];
