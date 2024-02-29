import React from 'react'
import { CertiCard } from './cards/CertiCard'

export const Certificates = () => {
  return (
    <div className="mx-auto">
      <h1 className='flex justify-center lg:w-[40%] text-5xl'>Certifications</h1>
      <CertiCard/>
    </div>
  )
}