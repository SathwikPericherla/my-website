import { HoverEffect } from "./card-hover-effect";
import ibmcerti from "../assets/certificates/ibmcerti.png"
import bsnl from "../assets/certificates/bsnl.png"
import matlab from "../assets/certificates/matlab.png"
import reactnative from "../assets/certificates/reactnative.png"

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
