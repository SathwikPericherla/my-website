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
    link: "https://drive.google.com/file/d/1yLhySKTPJ7eDKLj8VqYShRTXXy11NQoZ/view?usp=sharing",
    image: ibmcerti
  },
  {
    title: "React Native Bootcamp",
    description:
      "UDEMY",
    link: "https://drive.google.com/file/d/18K_fRqgX6YTt9m915vu3kh6tomASxXcB/view?usp=sharing", 
    image: reactnative
  },
  {
    title: "Telecommunications",
    description:
      "BSNL",
    link: "https://drive.google.com/file/d/1TpTrXPJlMAehdVVGBfo0PuuXQOuuOXsN/view?usp=sharing",
    image: bsnl
  },
  {
    title: "Matlab OnRamp",
    description:
      "MATLAB",
    link: "https://drive.google.com/file/d/1KWZ1b4sE42a9uU7oeTk0QGGYhdVYSfQ0/view?usp=sharing",
    image: matlab
  },
];
