import React from 'react'

export const About = () => {
  return (
    <div className='ml-9  my-6 rounded-lg'>

      <h2 className="flex mb-5">About Me</h2>

      <div className=' flex w-[750px]'> 
      <p className='text-justify'>Hello and welcome to my corner of the web! I'm thrilled to have you here. As a dedicated web developer, I am passionate about crafting immersive digital experiences that not only captivate but also deliver results. From sleek and responsive designs to seamless user experiences, I specialize in bringing ideas to life through code. With a keen eye for design and a commitment to pushing the boundaries of technology, I'm here to transform your vision into reality. Join me on a journey through my portfolio, where innovation meets creativity, and together, let's create something extraordinary.</p>
      </div>

      <div className="flex flex-col">
        <h2 className='flex mt-12 mb-9'>Here's the Skills I got!</h2>

        <div className='flex flex-col'>
        
        <div className='flex justify-between mb-11'>
        <div className='w-40'>
        <img src="src\assets\react.png" alt="" className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-40'>
        <img src="src\assets\nextjs.png" alt="" className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-40'>
        <img src="src\assets\uiux.png" alt="" className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-40'>
        <img src="src\assets\js.png" alt="" className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-40'>
        <img src="src\assets\html.png" alt="" className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        </div>

        <div className='flex justify-between'>
        <div className='w-40'>
        <img src="src\assets\tailwind.png" alt="" className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-40'>
        <img src="src\assets\ts.png" alt="" className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-40'>
        <img src="src\assets\python.png" alt="" className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-40'>
        <img src="src\assets\git.png" alt="" className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-40'>
        <img src="src\assets\latexx.png" alt="" className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>
        </div>

        </div>

      </div>

      </div>
  )
}