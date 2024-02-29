import React from 'react'
import htmllogo from '../assets/html.png'
import reactlogo from '../assets/react.png'
import nextjslogo from '../assets/nextjs.png'
import uiuxlogo from '../assets/uiux.png'
import jslogo from '../assets/js.png'
import tslogo from '../assets/ts.png'
import tailwindlogo from '../assets/tailwind.png'
import pythonlogo from '../assets/python.png'
import gitlogo from '../assets/git.png'
import latexlogo from '../assets/latex.png'

export const About = () => {
  return (
    <div className=' bg-white text-black dark:bg-black dark:text-white'>

      <div className=' w-[75%] mx-auto'> 
      <h2 className="mb-5 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">About Me</h2>
      <p className='text-justify lg:w-[750px] leading-7 lg:text-lg [&:not(:first-child)]:mt-6'>Hello and welcome to my corner of the web! I'm thrilled to have you here. As a dedicated web developer, I am passionate about crafting immersive digital experiences that not only captivate but also deliver results. From sleek and responsive designs to seamless user experiences, I specialize in bringing ideas to life through code. With a keen eye for design and a commitment to pushing the boundaries of technology, I'm here to transform your vision into reality. Join me on a journey through my portfolio, where innovation meets creativity, and together, let's create something extraordinary.</p>
      </div>

      <div className="w-[65%] mx-auto">
        <h2 className='scroll-m-20 lg:w-[30%] w-[90%] pb-2 text-3xl font-semibold tracking-tight mb-11 mt-9'>Here's the Skills I got!</h2>

        <div className='flex space-x-16 lg:space-x-10 lg:flex-col'>
        
        <div className='mx-auto lg:mx-10 lg:flex lg:space-x-24 mb-11 lg:mb-11'>
        <div className='w-24 mb-5 lg:mb-0'>
        <img src={reactlogo} alt="" title='React.js' className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-24 mb-5 lg:mb-0'>
        <img src={nextjslogo} alt="" title='Next.js' className='rounded-3xl shadow-2xl bg-white  hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-24 mb-5 lg:mb-0'>
        <img src={uiuxlogo} alt="" title='UI/UX' className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-24 mb-5 lg:mb-0'>
        <img src={jslogo} alt="" title='Javascript' className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-24 mb-5 lg:mb-0'>
        <img src={htmllogo} alt="" title='HTML' className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        </div>

        <div className='lg:flex lg:space-x-24'>
        <div className='w-24 mb-5 '>
        <img src={tailwindlogo} alt="" title='Tailwind' className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-24 mb-5 '>
        <img src={tslogo} alt="" title='Typescript' className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-24 mb-5 '>
        <img src={pythonlogo} alt="" title='Python' className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-24 mb-5 '>
        <img src={gitlogo} alt="" title='Git' className='rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>

        <div className='w-24 mb-5'>
        <img src={latexlogo} alt="" title='LateX' className='rounded-3xl bg-white shadow-2xl hover:scale-110 transition-transform duration-700' />
        </div>
        </div>

        </div>

      </div>

      </div>
  )
}