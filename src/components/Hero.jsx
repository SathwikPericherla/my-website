import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const Hero = () => {
  return (
    <div className="flex my-11 mb-32 items-center">

      <img src="src\assets\myimage.jpeg" alt="" className='w-[500px] my-6 rounded-lg shadow-2xl' />
      
      <div className='ml-16 my-6 rounded-lg w-[1000px]'>
        
      <h2 className="flex my-2">Hi, I am Sathwik</h2>
        
      <div>
      <p className='text-justify mb-5'>"Welcome to my digital playground, where creativity meets functionality and pixels come to life! As a passionate web developer, I invite you to explore my world of innovative design and cutting-edge technology. "</p>
      </div>
      
      <div className="flex justify-between w-56 ">
      <Stack spacing={2} direction="row">
      <Button variant="contained" className="">Resume</Button>
      </Stack>
      <Button href="#text-buttons">Contact Me</Button>
      </div>
      
      </div>

    </div>
  )
}
