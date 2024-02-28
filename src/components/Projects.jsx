import React from 'react'
import {CardDemo} from "./CardDemo"
import projects from "./constants"

// const projects=[
//   {title:"TextRecog",image:textrecog},
//   {title:"Attendance Management System",image:ams},
//   {title:"Semantify",image:semantify},
//   {title:"MyAI Bot",image:myaibot},
//   {title:"SkySync",image:skysync},
//   {title:"Appointment Booking Application",image:apbs},]

export const Projects = () => {
  return (
    <div className='w-screen bg-white text-black dark:bg-black dark:text-white'>
    
      <h1 className='flex justify-center lg:justify-start mt-24 text-5xl lg:ml-48'>My Projects</h1>

    <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
     {projects.map((project, index)=>( <CardDemo title={project.title} image={project.image} key={index} />))}
    </div>


    </div>
  )
}