import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import MyImage from '../assets/myimage.jpeg'
import { HeroDesc, HeroText } from '../components/cards/TextEffect'

export const Hero = () => {
  return (
    <div className="mx-auto flex flex-col my-11 mb-32 mt-20 items-center bg-white text-black dark:bg-black dark:text-white lg:flex-row lg:justify-center lg:w-[90%]">

      <img src={MyImage} alt="Sathwik Pericherla" title='Sathwik Pericherla' 
      className='w-[400px] my-6 rounded-lg shadow-2xl shadow-black lg:ml-36 hover:scale-105 transition-transform duration-700' />
       
      <div>
      <div className='w-96 mx-auto flex flex-col lg:w-[70%]'>
      <HeroText/>
      <blockquote className="mb-9 text-lg lg:text-2xl border-l-2 pl-5 italic">
      "Welcome to my digital playground, where creativity meets functionality and pixels come to life! As a passionate web developer, I invite you to explore my world of innovative design and cutting-edge technology. "
    </blockquote>
      </div>
      
      <div className="flex lg:mx-auto lg:w-[70%]">
      <a href="https://drive.google.com/file/d/1K2mKVScUWHC0uAc1Am0cLcrs4LcE0XL2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <div className="ml-9 flex justify-center border-2 text-xl font-bold bg-black text-white px-7 py-2 pb-3 rounded-lg hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out">
      Resume
      <LaunchIcon className='ml-1 mt-[2px] lg:ml-1 lg:mt-1'/>
      </div>
      </a>
      
      <button className='ml-3 font-bold text-xl px-6 hover:underline duration-700'>
      <a href="mailto:mail@sathwikpericherla.in" target="_blank" rel="noreferrer">Contact Me</a>
      </button>
      
      </div>
      </div>
      </div>
  )
}
