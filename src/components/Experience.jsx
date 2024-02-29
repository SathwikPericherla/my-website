import React from 'react'
import { ExperiCard } from './cards/ExperiCard'

export const Experience = () => {
  return (
    <div className='mx-auto mt-10 lg:mt-24 flex flex-col justify-center'>
      <h1 className='flex justify-center scroll-m-20 font-extrabold tracking-tight lg:text-5xl lg:justify-start text-5xl lg:ml-48'>Experience</h1>
      <ExperiCard />
    </div>
  )
}
