import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import LaunchIcon from '@mui/icons-material/Launch';

export function ResumeButton() {
  return (
    <div className="">
      <HoverBorderGradient
        containerClassName="rounded-lg"
        as="button"
        className="flex justify-center text-xl font-bold bg-black text-white px-7 py-2 pb-3 hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out">
        <a href="https://drive.google.com/file/d/1K2mKVScUWHC0uAc1Am0cLcrs4LcE0XL2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <div className="">
      Resume
      <LaunchIcon className='ml-1 mt-[2px] lg:ml-1 lg:mt-1'/>
      </div>
      </a>
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};