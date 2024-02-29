import React from 'react'
import {ProjectCard} from "./cards/ProjectCard"
import projects from "./constants"

export const Projects = () => {
  return (
    <div className='w-screen bg-white text-black dark:bg-black dark:text-white'>
    
      <h1 className='flex justify-center lg:justify-start scroll-m-20 font-extrabold tracking-tight lg:text-5xl mt-24 text-5xl lg:ml-48'>My Projects</h1>

    <div className='grid lg:w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
     {projects.map((project, index)=>( <ProjectCard title={project.title} image={project.image} bio={project.bio} link={project.link} key={index} />))}
    </div>


    </div>
  )
}