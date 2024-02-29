import React from 'react'
import { CertiCard } from './cards/CertiCard'

export const Certificates = () => {
  return (
    <div className="mx-auto">
      <h1 className='flex justify-center font-extrabold tracking-tight lg:text-5xl lg:w-[40%] lg:ml-9 mt-20 text-5xl'>Certifications</h1>
      <CertiCard/>
    </div>
  )
}