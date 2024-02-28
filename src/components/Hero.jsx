import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import MyImage from '../assets/myimage.jpeg'

export const Hero = () => {
  return (
    <div className="flex my-11 mb-32 mt-20 items-center bg-white text-black dark:bg-black dark:text-white">

      <img src={MyImage} alt="Sathwik Pericherla" title='Sathwik Pericherla' className='w-[400px] ml-48 my-6 rounded-lg shadow-2xl shadow-black' />
      
      <div className='ml-16 my-6 rounded-lg w-[1000px]'>
        
      <h2 className="flex my-3 text-6xl">Hi, I am Sathwik</h2>
        
      <div className='mr-24'>
      <p className='text-justify mb-9 text-2xl'>"Welcome to my digital playground, where creativity meets functionality and pixels come to life! As a passionate web developer, I invite you to explore my world of innovative design and cutting-edge technology. "</p>
      </div>
      
      <div className="flex w-96 ">
      <a href="https://drive.google.com/file/d/1K2mKVScUWHC0uAc1Am0cLcrs4LcE0XL2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <div className="ml-9 flex justify-center border-2 text-xl font-bold bg-black text-white px-7 py-2 pb-3 rounded-lg hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out">
      Resume
      <LaunchIcon className='ml-1 mt-1'/>
      </div>
      </a>
      
      <button className='ml-3 font-bold text-xl px-6 hover:underline duration-700'>
      <a href="mailto:psathwikvarma93@gmail.com" target="_blank" rel="noreferrer">Contact Me</a>
      </button>
      
      </div>
      
      </div>

    </div>
  )
}
