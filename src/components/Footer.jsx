import React from 'react'
import { useState, useEffect } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    const socialIcons = [{icon: LinkedInIcon, link:"https://www.linkedin.com/in/sathwikvarma93" },
                         {icon: GitHubIcon, link:"https://www.github.com/sathwikpericherla" }, 
                         {icon: InstagramIcon, link:"https://www.instagram.com/sathwikvarma93/" }, 
                        ];

    const [currentDate, setCurrentDate] = useState(new Date());

      useEffect(() => {
      const interval = setInterval(() => {
      setCurrentYear(new Date());
      }, 60000);
                      
      return () => clearInterval(interval);
    }, []);

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    const year = currentDate.getFullYear();
                        
    return (
        <div className="relative ">
     
      <div className="bottom-0 flex justify-between w-full bg-white dark:bg-black text-black border border-black dark:border-white py-4 px-6">
        <p className="text-sm font-semibold lg:ml-10 dark:text-white">Sathwik Pericherla, {day} {month} {year}<br className='lg:hidden'/> &copy;  All rights reserved.</p>
        <div className='flex lg:mr-10'>
        {socialIcons.map((item, index) => (
            <a href={item.link} target='_blank' rel="noopener noreferrer" key={index}>
            <li className="list-none ml-5 lg:ml-11 lg:mr-6 dark:text-white">
              <item.icon /> 
            </li>
            </a>
          ))}
        </div>
        </div>
        </div>
      );
    };