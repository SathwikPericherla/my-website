import React from 'react'
import { ExperiCard } from './cards/ExperiCard'

export const Experience = () => {
  return (
    <div className='mx-auto mt-16 flex flex-col justify-center'>
      <h1 className='flex justify-center lg:justify-start mt-24 text-5xl lg:ml-48'>Experience</h1>
      <ExperiCard />
    </div>
  )
}
