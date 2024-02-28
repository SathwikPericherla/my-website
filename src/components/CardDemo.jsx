import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import LaunchIcon from '@mui/icons-material/Launch';

export function CardDemo({title,bio,image,link}) {
  return (
    <CardContainer className="inter-var  lg:w-96 ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {bio}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-20">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            View Project <LaunchIcon style={{ fontSize: 18 }}/>
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
