import React from "react";
import { PinContainer } from "../ui/3d-pin";
import linkedin from "../social/linkedin.png"
import github from "../social/github.png"

export function SocialCard() {

  const Social = [
    { title: "LinkedIn", link: "linkedin.com/in/sathwikvarma93", picture: linkedin, url: "https://www.linkedin.com/in/sathwikvarma93", desc: "Here's my LinkedIn Profile" },
    { title: "GitHub", link: "github.com/sathwikpericherla", picture: github, url: "https://github.com/sathwikpericherla", desc: "Here's my GitHub Profile" }
  ];

  return (
    <div className="flex flex-col md:flex-row md:w-[50%] mx-auto">
      {Social.map((item, index) => (
        <div key={index} className="h-[25rem] w-full flex items-center justify-center z-10">
          <a href={item.url} target="_blank"><PinContainer title={item.link} href={item.url}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black dark:text-slate-100">
                {item.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  {item.desc}
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-white">
                <img src={item.picture} alt={item.title} className="rounded-lg" />
              </div>
            </div>
          </PinContainer></a>
        </div>
      ))}
    </div>
  );
}
